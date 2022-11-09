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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ImageOcrPhotoWordsWithLocationHeaders = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoWordsWithLocationHeaders, _super);
    function ImageOcrPhotoWordsWithLocationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=diagnostics" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoWordsWithLocationHeaders.prototype, "diagnostics", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoWordsWithLocationHeaders.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=preprocessing" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoWordsWithLocationHeaders.prototype, "preprocessing", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=recognitionMode" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoWordsWithLocationHeaders.prototype, "recognitionMode", void 0);
    return ImageOcrPhotoWordsWithLocationHeaders;
}(SpeakeasyBase));
export { ImageOcrPhotoWordsWithLocationHeaders };
var ImageOcrPhotoWordsWithLocationRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoWordsWithLocationRequestBodyImageFile, _super);
    function ImageOcrPhotoWordsWithLocationRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], ImageOcrPhotoWordsWithLocationRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], ImageOcrPhotoWordsWithLocationRequestBodyImageFile.prototype, "imageFile", void 0);
    return ImageOcrPhotoWordsWithLocationRequestBodyImageFile;
}(SpeakeasyBase));
export { ImageOcrPhotoWordsWithLocationRequestBodyImageFile };
var ImageOcrPhotoWordsWithLocationRequestBody = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoWordsWithLocationRequestBody, _super);
    function ImageOcrPhotoWordsWithLocationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", ImageOcrPhotoWordsWithLocationRequestBodyImageFile)
    ], ImageOcrPhotoWordsWithLocationRequestBody.prototype, "imageFile", void 0);
    return ImageOcrPhotoWordsWithLocationRequestBody;
}(SpeakeasyBase));
export { ImageOcrPhotoWordsWithLocationRequestBody };
var ImageOcrPhotoWordsWithLocationSecurity = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoWordsWithLocationSecurity, _super);
    function ImageOcrPhotoWordsWithLocationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], ImageOcrPhotoWordsWithLocationSecurity.prototype, "apikey", void 0);
    return ImageOcrPhotoWordsWithLocationSecurity;
}(SpeakeasyBase));
export { ImageOcrPhotoWordsWithLocationSecurity };
var ImageOcrPhotoWordsWithLocationRequest = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoWordsWithLocationRequest, _super);
    function ImageOcrPhotoWordsWithLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ImageOcrPhotoWordsWithLocationHeaders)
    ], ImageOcrPhotoWordsWithLocationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", ImageOcrPhotoWordsWithLocationRequestBody)
    ], ImageOcrPhotoWordsWithLocationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ImageOcrPhotoWordsWithLocationSecurity)
    ], ImageOcrPhotoWordsWithLocationRequest.prototype, "security", void 0);
    return ImageOcrPhotoWordsWithLocationRequest;
}(SpeakeasyBase));
export { ImageOcrPhotoWordsWithLocationRequest };
var ImageOcrPhotoWordsWithLocationResponse = /** @class */ (function (_super) {
    __extends(ImageOcrPhotoWordsWithLocationResponse, _super);
    function ImageOcrPhotoWordsWithLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ImageOcrPhotoWordsWithLocationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ImageOcrPhotoWordsWithLocationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PhotoToWordsWithLocationResult)
    ], ImageOcrPhotoWordsWithLocationResponse.prototype, "photoToWordsWithLocationResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ImageOcrPhotoWordsWithLocationResponse.prototype, "statusCode", void 0);
    return ImageOcrPhotoWordsWithLocationResponse;
}(SpeakeasyBase));
export { ImageOcrPhotoWordsWithLocationResponse };
