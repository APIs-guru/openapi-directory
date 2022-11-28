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
var ImageOcrPhotoRecognizeReceiptHeaders = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptHeaders, _super);
    function ImageOcrPhotoRecognizeReceiptHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeReceiptHeaders.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeReceiptHeaders.prototype, "preprocessing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=recognitionMode" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeReceiptHeaders.prototype, "recognitionMode", void 0);
    return ImageOcrPhotoRecognizeReceiptHeaders;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeReceiptHeaders };
var ImageOcrPhotoRecognizeReceiptRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptRequestBodyImageFile, _super);
    function ImageOcrPhotoRecognizeReceiptRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ImageOcrPhotoRecognizeReceiptRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeReceiptRequestBodyImageFile.prototype, "imageFile", void 0);
    return ImageOcrPhotoRecognizeReceiptRequestBodyImageFile;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeReceiptRequestBodyImageFile };
var ImageOcrPhotoRecognizeReceiptRequestBody = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptRequestBody, _super);
    function ImageOcrPhotoRecognizeReceiptRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", ImageOcrPhotoRecognizeReceiptRequestBodyImageFile)
    ], ImageOcrPhotoRecognizeReceiptRequestBody.prototype, "imageFile", void 0);
    return ImageOcrPhotoRecognizeReceiptRequestBody;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeReceiptRequestBody };
var ImageOcrPhotoRecognizeReceiptSecurity = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptSecurity, _super);
    function ImageOcrPhotoRecognizeReceiptSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], ImageOcrPhotoRecognizeReceiptSecurity.prototype, "apikey", void 0);
    return ImageOcrPhotoRecognizeReceiptSecurity;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeReceiptSecurity };
var ImageOcrPhotoRecognizeReceiptRequest = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptRequest, _super);
    function ImageOcrPhotoRecognizeReceiptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImageOcrPhotoRecognizeReceiptHeaders)
    ], ImageOcrPhotoRecognizeReceiptRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ImageOcrPhotoRecognizeReceiptRequestBody)
    ], ImageOcrPhotoRecognizeReceiptRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImageOcrPhotoRecognizeReceiptSecurity)
    ], ImageOcrPhotoRecognizeReceiptRequest.prototype, "security", void 0);
    return ImageOcrPhotoRecognizeReceiptRequest;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeReceiptRequest };
var ImageOcrPhotoRecognizeReceiptResponse = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeReceiptResponse, _super);
    function ImageOcrPhotoRecognizeReceiptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ImageOcrPhotoRecognizeReceiptResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeReceiptResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReceiptRecognitionResult)
    ], ImageOcrPhotoRecognizeReceiptResponse.prototype, "receiptRecognitionResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImageOcrPhotoRecognizeReceiptResponse.prototype, "statusCode", void 0);
    return ImageOcrPhotoRecognizeReceiptResponse;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeReceiptResponse };
