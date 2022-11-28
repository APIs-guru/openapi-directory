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
var ImageOcrImageLinesWithLocationHeaders = /** @class */ (function (_super) {
    __extends(ImageOcrImageLinesWithLocationHeaders, _super);
    function ImageOcrImageLinesWithLocationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], ImageOcrImageLinesWithLocationHeaders.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" }),
        __metadata("design:type", String)
    ], ImageOcrImageLinesWithLocationHeaders.prototype, "preprocessing", void 0);
    return ImageOcrImageLinesWithLocationHeaders;
}(SpeakeasyBase));
export { ImageOcrImageLinesWithLocationHeaders };
var ImageOcrImageLinesWithLocationRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(ImageOcrImageLinesWithLocationRequestBodyImageFile, _super);
    function ImageOcrImageLinesWithLocationRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ImageOcrImageLinesWithLocationRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], ImageOcrImageLinesWithLocationRequestBodyImageFile.prototype, "imageFile", void 0);
    return ImageOcrImageLinesWithLocationRequestBodyImageFile;
}(SpeakeasyBase));
export { ImageOcrImageLinesWithLocationRequestBodyImageFile };
var ImageOcrImageLinesWithLocationRequestBody = /** @class */ (function (_super) {
    __extends(ImageOcrImageLinesWithLocationRequestBody, _super);
    function ImageOcrImageLinesWithLocationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", ImageOcrImageLinesWithLocationRequestBodyImageFile)
    ], ImageOcrImageLinesWithLocationRequestBody.prototype, "imageFile", void 0);
    return ImageOcrImageLinesWithLocationRequestBody;
}(SpeakeasyBase));
export { ImageOcrImageLinesWithLocationRequestBody };
var ImageOcrImageLinesWithLocationSecurity = /** @class */ (function (_super) {
    __extends(ImageOcrImageLinesWithLocationSecurity, _super);
    function ImageOcrImageLinesWithLocationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], ImageOcrImageLinesWithLocationSecurity.prototype, "apikey", void 0);
    return ImageOcrImageLinesWithLocationSecurity;
}(SpeakeasyBase));
export { ImageOcrImageLinesWithLocationSecurity };
var ImageOcrImageLinesWithLocationRequest = /** @class */ (function (_super) {
    __extends(ImageOcrImageLinesWithLocationRequest, _super);
    function ImageOcrImageLinesWithLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImageOcrImageLinesWithLocationHeaders)
    ], ImageOcrImageLinesWithLocationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ImageOcrImageLinesWithLocationRequestBody)
    ], ImageOcrImageLinesWithLocationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ImageOcrImageLinesWithLocationSecurity)
    ], ImageOcrImageLinesWithLocationRequest.prototype, "security", void 0);
    return ImageOcrImageLinesWithLocationRequest;
}(SpeakeasyBase));
export { ImageOcrImageLinesWithLocationRequest };
var ImageOcrImageLinesWithLocationResponse = /** @class */ (function (_super) {
    __extends(ImageOcrImageLinesWithLocationResponse, _super);
    function ImageOcrImageLinesWithLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ImageOcrImageLinesWithLocationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ImageOcrImageLinesWithLocationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImageToLinesWithLocationResult)
    ], ImageOcrImageLinesWithLocationResponse.prototype, "imageToLinesWithLocationResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ImageOcrImageLinesWithLocationResponse.prototype, "statusCode", void 0);
    return ImageOcrImageLinesWithLocationResponse;
}(SpeakeasyBase));
export { ImageOcrImageLinesWithLocationResponse };
