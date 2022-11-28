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
var ImageOcrImageWordsWithLocationHeaders = /** @class */ (function (_super) {
    __extends(ImageOcrImageWordsWithLocationHeaders, _super);
    function ImageOcrImageWordsWithLocationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], ImageOcrImageWordsWithLocationHeaders.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" }),
        __metadata("design:type", String)
    ], ImageOcrImageWordsWithLocationHeaders.prototype, "preprocessing", void 0);
    return ImageOcrImageWordsWithLocationHeaders;
}(SpeakeasyBase));
export { ImageOcrImageWordsWithLocationHeaders };
var ImageOcrImageWordsWithLocationRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(ImageOcrImageWordsWithLocationRequestBodyImageFile, _super);
    function ImageOcrImageWordsWithLocationRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ImageOcrImageWordsWithLocationRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], ImageOcrImageWordsWithLocationRequestBodyImageFile.prototype, "imageFile", void 0);
    return ImageOcrImageWordsWithLocationRequestBodyImageFile;
}(SpeakeasyBase));
export { ImageOcrImageWordsWithLocationRequestBodyImageFile };
var ImageOcrImageWordsWithLocationRequestBody = /** @class */ (function (_super) {
    __extends(ImageOcrImageWordsWithLocationRequestBody, _super);
    function ImageOcrImageWordsWithLocationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", ImageOcrImageWordsWithLocationRequestBodyImageFile)
    ], ImageOcrImageWordsWithLocationRequestBody.prototype, "imageFile", void 0);
    return ImageOcrImageWordsWithLocationRequestBody;
}(SpeakeasyBase));
export { ImageOcrImageWordsWithLocationRequestBody };
var ImageOcrImageWordsWithLocationSecurity = /** @class */ (function (_super) {
    __extends(ImageOcrImageWordsWithLocationSecurity, _super);
    function ImageOcrImageWordsWithLocationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], ImageOcrImageWordsWithLocationSecurity.prototype, "apikey", void 0);
    return ImageOcrImageWordsWithLocationSecurity;
}(SpeakeasyBase));
export { ImageOcrImageWordsWithLocationSecurity };
var ImageOcrImageWordsWithLocationRequest = /** @class */ (function (_super) {
    __extends(ImageOcrImageWordsWithLocationRequest, _super);
    function ImageOcrImageWordsWithLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImageOcrImageWordsWithLocationHeaders)
    ], ImageOcrImageWordsWithLocationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ImageOcrImageWordsWithLocationRequestBody)
    ], ImageOcrImageWordsWithLocationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImageOcrImageWordsWithLocationSecurity)
    ], ImageOcrImageWordsWithLocationRequest.prototype, "security", void 0);
    return ImageOcrImageWordsWithLocationRequest;
}(SpeakeasyBase));
export { ImageOcrImageWordsWithLocationRequest };
var ImageOcrImageWordsWithLocationResponse = /** @class */ (function (_super) {
    __extends(ImageOcrImageWordsWithLocationResponse, _super);
    function ImageOcrImageWordsWithLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ImageOcrImageWordsWithLocationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImageOcrImageWordsWithLocationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImageToWordsWithLocationResult)
    ], ImageOcrImageWordsWithLocationResponse.prototype, "imageToWordsWithLocationResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImageOcrImageWordsWithLocationResponse.prototype, "statusCode", void 0);
    return ImageOcrImageWordsWithLocationResponse;
}(SpeakeasyBase));
export { ImageOcrImageWordsWithLocationResponse };
