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
import * as shared from "../shared";
var GetPhotoSizesByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetPhotoSizesByIdQueryParams, _super);
    function GetPhotoSizesByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetPhotoSizesByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" }),
        __metadata("design:type", String)
    ], GetPhotoSizesByIdQueryParams.prototype, "photoId", void 0);
    return GetPhotoSizesByIdQueryParams;
}(SpeakeasyBase));
export { GetPhotoSizesByIdQueryParams };
var GetPhotoSizesById200ApplicationJsonSizes = /** @class */ (function (_super) {
    __extends(GetPhotoSizesById200ApplicationJsonSizes, _super);
    function GetPhotoSizesById200ApplicationJsonSizes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canblog" }),
        __metadata("design:type", Number)
    ], GetPhotoSizesById200ApplicationJsonSizes.prototype, "canblog", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=candownload" }),
        __metadata("design:type", Number)
    ], GetPhotoSizesById200ApplicationJsonSizes.prototype, "candownload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canprint" }),
        __metadata("design:type", Number)
    ], GetPhotoSizesById200ApplicationJsonSizes.prototype, "canprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizes", elemType: shared.Size }),
        __metadata("design:type", Array)
    ], GetPhotoSizesById200ApplicationJsonSizes.prototype, "sizes", void 0);
    return GetPhotoSizesById200ApplicationJsonSizes;
}(SpeakeasyBase));
export { GetPhotoSizesById200ApplicationJsonSizes };
var GetPhotoSizesById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetPhotoSizesById200ApplicationJson, _super);
    function GetPhotoSizesById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sizes" }),
        __metadata("design:type", GetPhotoSizesById200ApplicationJsonSizes)
    ], GetPhotoSizesById200ApplicationJson.prototype, "sizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stat" }),
        __metadata("design:type", String)
    ], GetPhotoSizesById200ApplicationJson.prototype, "stat", void 0);
    return GetPhotoSizesById200ApplicationJson;
}(SpeakeasyBase));
export { GetPhotoSizesById200ApplicationJson };
var GetPhotoSizesByIdRequest = /** @class */ (function (_super) {
    __extends(GetPhotoSizesByIdRequest, _super);
    function GetPhotoSizesByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhotoSizesByIdQueryParams)
    ], GetPhotoSizesByIdRequest.prototype, "queryParams", void 0);
    return GetPhotoSizesByIdRequest;
}(SpeakeasyBase));
export { GetPhotoSizesByIdRequest };
var GetPhotoSizesByIdResponse = /** @class */ (function (_super) {
    __extends(GetPhotoSizesByIdResponse, _super);
    function GetPhotoSizesByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPhotoSizesByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPhotoSizesByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPhotoSizesById200ApplicationJson)
    ], GetPhotoSizesByIdResponse.prototype, "getPhotoSizesById200ApplicationJsonObject", void 0);
    return GetPhotoSizesByIdResponse;
}(SpeakeasyBase));
export { GetPhotoSizesByIdResponse };
