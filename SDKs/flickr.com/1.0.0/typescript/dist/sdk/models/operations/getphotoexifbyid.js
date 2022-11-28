var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
var GetPhotoExifByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetPhotoExifByIdQueryParams, _super);
    function GetPhotoExifByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetPhotoExifByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" }),
        __metadata("design:type", String)
    ], GetPhotoExifByIdQueryParams.prototype, "photoId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secret" }),
        __metadata("design:type", String)
    ], GetPhotoExifByIdQueryParams.prototype, "secret", void 0);
    return GetPhotoExifByIdQueryParams;
}(SpeakeasyBase));
export { GetPhotoExifByIdQueryParams };
var GetPhotoExifById200ApplicationJsonPhotoExifRaw = /** @class */ (function (_super) {
    __extends(GetPhotoExifById200ApplicationJsonPhotoExifRaw, _super);
    function GetPhotoExifById200ApplicationJsonPhotoExifRaw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], GetPhotoExifById200ApplicationJsonPhotoExifRaw.prototype, "content", void 0);
    return GetPhotoExifById200ApplicationJsonPhotoExifRaw;
}(SpeakeasyBase));
export { GetPhotoExifById200ApplicationJsonPhotoExifRaw };
var GetPhotoExifById200ApplicationJsonPhotoExif = /** @class */ (function (_super) {
    __extends(GetPhotoExifById200ApplicationJsonPhotoExif, _super);
    function GetPhotoExifById200ApplicationJsonPhotoExif() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], GetPhotoExifById200ApplicationJsonPhotoExif.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=raw" }),
        __metadata("design:type", GetPhotoExifById200ApplicationJsonPhotoExifRaw)
    ], GetPhotoExifById200ApplicationJsonPhotoExif.prototype, "raw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], GetPhotoExifById200ApplicationJsonPhotoExif.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagspace" }),
        __metadata("design:type", String)
    ], GetPhotoExifById200ApplicationJsonPhotoExif.prototype, "tagspace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagspaceid" }),
        __metadata("design:type", String)
    ], GetPhotoExifById200ApplicationJsonPhotoExif.prototype, "tagspaceid", void 0);
    return GetPhotoExifById200ApplicationJsonPhotoExif;
}(SpeakeasyBase));
export { GetPhotoExifById200ApplicationJsonPhotoExif };
var GetPhotoExifById200ApplicationJsonPhoto = /** @class */ (function (_super) {
    __extends(GetPhotoExifById200ApplicationJsonPhoto, _super);
    function GetPhotoExifById200ApplicationJsonPhoto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=camera" }),
        __metadata("design:type", String)
    ], GetPhotoExifById200ApplicationJsonPhoto.prototype, "camera", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exif", elemType: GetPhotoExifById200ApplicationJsonPhotoExif }),
        __metadata("design:type", Array)
    ], GetPhotoExifById200ApplicationJsonPhoto.prototype, "exif", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=farm" }),
        __metadata("design:type", String)
    ], GetPhotoExifById200ApplicationJsonPhoto.prototype, "farm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetPhotoExifById200ApplicationJsonPhoto.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], GetPhotoExifById200ApplicationJsonPhoto.prototype, "secret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", String)
    ], GetPhotoExifById200ApplicationJsonPhoto.prototype, "server", void 0);
    return GetPhotoExifById200ApplicationJsonPhoto;
}(SpeakeasyBase));
export { GetPhotoExifById200ApplicationJsonPhoto };
var GetPhotoExifById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPhotoExifById200ApplicationJson, _super);
    function GetPhotoExifById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photo" }),
        __metadata("design:type", GetPhotoExifById200ApplicationJsonPhoto)
    ], GetPhotoExifById200ApplicationJson.prototype, "photo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], GetPhotoExifById200ApplicationJson.prototype, "stat", void 0);
    return GetPhotoExifById200ApplicationJson;
}(SpeakeasyBase));
export { GetPhotoExifById200ApplicationJson };
var GetPhotoExifByIdRequest = /** @class */ (function (_super) {
    __extends(GetPhotoExifByIdRequest, _super);
    function GetPhotoExifByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhotoExifByIdQueryParams)
    ], GetPhotoExifByIdRequest.prototype, "queryParams", void 0);
    return GetPhotoExifByIdRequest;
}(SpeakeasyBase));
export { GetPhotoExifByIdRequest };
var GetPhotoExifByIdResponse = /** @class */ (function (_super) {
    __extends(GetPhotoExifByIdResponse, _super);
    function GetPhotoExifByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPhotoExifByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPhotoExifByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhotoExifById200ApplicationJson)
    ], GetPhotoExifByIdResponse.prototype, "getPhotoExifById200ApplicationJsonObject", void 0);
    return GetPhotoExifByIdResponse;
}(SpeakeasyBase));
export { GetPhotoExifByIdResponse };
