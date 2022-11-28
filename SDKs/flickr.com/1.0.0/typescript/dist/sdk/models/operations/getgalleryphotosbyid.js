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
var GetGalleryPhotosByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetGalleryPhotosByIdQueryParams, _super);
    function GetGalleryPhotosByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetGalleryPhotosByIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gallery_id" }),
        __metadata("design:type", String)
    ], GetGalleryPhotosByIdQueryParams.prototype, "galleryId", void 0);
    return GetGalleryPhotosByIdQueryParams;
}(SpeakeasyBase));
export { GetGalleryPhotosByIdQueryParams };
var GetGalleryPhotosById200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetGalleryPhotosById200ApplicationJson, _super);
    function GetGalleryPhotosById200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photos", elemType: shared.Photo }),
        __metadata("design:type", Array)
    ], GetGalleryPhotosById200ApplicationJson.prototype, "photos", void 0);
    return GetGalleryPhotosById200ApplicationJson;
}(SpeakeasyBase));
export { GetGalleryPhotosById200ApplicationJson };
var GetGalleryPhotosByIdRequest = /** @class */ (function (_super) {
    __extends(GetGalleryPhotosByIdRequest, _super);
    function GetGalleryPhotosByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGalleryPhotosByIdQueryParams)
    ], GetGalleryPhotosByIdRequest.prototype, "queryParams", void 0);
    return GetGalleryPhotosByIdRequest;
}(SpeakeasyBase));
export { GetGalleryPhotosByIdRequest };
var GetGalleryPhotosByIdResponse = /** @class */ (function (_super) {
    __extends(GetGalleryPhotosByIdResponse, _super);
    function GetGalleryPhotosByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetGalleryPhotosByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetGalleryPhotosByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetGalleryPhotosById200ApplicationJson)
    ], GetGalleryPhotosByIdResponse.prototype, "getGalleryPhotosById200ApplicationJsonObject", void 0);
    return GetGalleryPhotosByIdResponse;
}(SpeakeasyBase));
export { GetGalleryPhotosByIdResponse };
