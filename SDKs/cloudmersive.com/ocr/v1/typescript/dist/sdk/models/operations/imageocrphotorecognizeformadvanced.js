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
var ImageOcrPhotoRecognizeFormAdvancedHeaders = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeFormAdvancedHeaders, _super);
    function ImageOcrPhotoRecognizeFormAdvancedHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=bucketID" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeFormAdvancedHeaders.prototype, "bucketId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=bucketSecretKey" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeFormAdvancedHeaders.prototype, "bucketSecretKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=diagnostics" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeFormAdvancedHeaders.prototype, "diagnostics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeFormAdvancedHeaders.prototype, "preprocessing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=recognitionMode" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeFormAdvancedHeaders.prototype, "recognitionMode", void 0);
    return ImageOcrPhotoRecognizeFormAdvancedHeaders;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeFormAdvancedHeaders };
var ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile, _super);
    function ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile.prototype, "imageFile", void 0);
    return ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile };
var ImageOcrPhotoRecognizeFormAdvancedRequestBody = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeFormAdvancedRequestBody, _super);
    function ImageOcrPhotoRecognizeFormAdvancedRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile)
    ], ImageOcrPhotoRecognizeFormAdvancedRequestBody.prototype, "imageFile", void 0);
    return ImageOcrPhotoRecognizeFormAdvancedRequestBody;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeFormAdvancedRequestBody };
var ImageOcrPhotoRecognizeFormAdvancedSecurity = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeFormAdvancedSecurity, _super);
    function ImageOcrPhotoRecognizeFormAdvancedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], ImageOcrPhotoRecognizeFormAdvancedSecurity.prototype, "apikey", void 0);
    return ImageOcrPhotoRecognizeFormAdvancedSecurity;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeFormAdvancedSecurity };
var ImageOcrPhotoRecognizeFormAdvancedRequest = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeFormAdvancedRequest, _super);
    function ImageOcrPhotoRecognizeFormAdvancedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImageOcrPhotoRecognizeFormAdvancedHeaders)
    ], ImageOcrPhotoRecognizeFormAdvancedRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ImageOcrPhotoRecognizeFormAdvancedRequestBody)
    ], ImageOcrPhotoRecognizeFormAdvancedRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImageOcrPhotoRecognizeFormAdvancedSecurity)
    ], ImageOcrPhotoRecognizeFormAdvancedRequest.prototype, "security", void 0);
    return ImageOcrPhotoRecognizeFormAdvancedRequest;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeFormAdvancedRequest };
var ImageOcrPhotoRecognizeFormAdvancedResponse = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoRecognizeFormAdvancedResponse, _super);
    function ImageOcrPhotoRecognizeFormAdvancedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ImageOcrPhotoRecognizeFormAdvancedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImageOcrPhotoRecognizeFormAdvancedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FormRecognitionResult)
    ], ImageOcrPhotoRecognizeFormAdvancedResponse.prototype, "formRecognitionResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImageOcrPhotoRecognizeFormAdvancedResponse.prototype, "statusCode", void 0);
    return ImageOcrPhotoRecognizeFormAdvancedResponse;
}(SpeakeasyBase));
export { ImageOcrPhotoRecognizeFormAdvancedResponse };
