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
var PdfOcrPdfToWordsWithLocationHeaders = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToWordsWithLocationHeaders, _super);
    function PdfOcrPdfToWordsWithLocationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], PdfOcrPdfToWordsWithLocationHeaders.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" }),
        __metadata("design:type", String)
    ], PdfOcrPdfToWordsWithLocationHeaders.prototype, "preprocessing", void 0);
    return PdfOcrPdfToWordsWithLocationHeaders;
}(SpeakeasyBase));
export { PdfOcrPdfToWordsWithLocationHeaders };
var PdfOcrPdfToWordsWithLocationRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToWordsWithLocationRequestBodyImageFile, _super);
    function PdfOcrPdfToWordsWithLocationRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PdfOcrPdfToWordsWithLocationRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], PdfOcrPdfToWordsWithLocationRequestBodyImageFile.prototype, "imageFile", void 0);
    return PdfOcrPdfToWordsWithLocationRequestBodyImageFile;
}(SpeakeasyBase));
export { PdfOcrPdfToWordsWithLocationRequestBodyImageFile };
var PdfOcrPdfToWordsWithLocationRequestBody = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToWordsWithLocationRequestBody, _super);
    function PdfOcrPdfToWordsWithLocationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PdfOcrPdfToWordsWithLocationRequestBodyImageFile)
    ], PdfOcrPdfToWordsWithLocationRequestBody.prototype, "imageFile", void 0);
    return PdfOcrPdfToWordsWithLocationRequestBody;
}(SpeakeasyBase));
export { PdfOcrPdfToWordsWithLocationRequestBody };
var PdfOcrPdfToWordsWithLocationSecurity = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToWordsWithLocationSecurity, _super);
    function PdfOcrPdfToWordsWithLocationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], PdfOcrPdfToWordsWithLocationSecurity.prototype, "apikey", void 0);
    return PdfOcrPdfToWordsWithLocationSecurity;
}(SpeakeasyBase));
export { PdfOcrPdfToWordsWithLocationSecurity };
var PdfOcrPdfToWordsWithLocationRequest = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToWordsWithLocationRequest, _super);
    function PdfOcrPdfToWordsWithLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PdfOcrPdfToWordsWithLocationHeaders)
    ], PdfOcrPdfToWordsWithLocationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PdfOcrPdfToWordsWithLocationRequestBody)
    ], PdfOcrPdfToWordsWithLocationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PdfOcrPdfToWordsWithLocationSecurity)
    ], PdfOcrPdfToWordsWithLocationRequest.prototype, "security", void 0);
    return PdfOcrPdfToWordsWithLocationRequest;
}(SpeakeasyBase));
export { PdfOcrPdfToWordsWithLocationRequest };
var PdfOcrPdfToWordsWithLocationResponse = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToWordsWithLocationResponse, _super);
    function PdfOcrPdfToWordsWithLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PdfOcrPdfToWordsWithLocationResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PdfOcrPdfToWordsWithLocationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PdfToWordsWithLocationResult)
    ], PdfOcrPdfToWordsWithLocationResponse.prototype, "pdfToWordsWithLocationResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PdfOcrPdfToWordsWithLocationResponse.prototype, "statusCode", void 0);
    return PdfOcrPdfToWordsWithLocationResponse;
}(SpeakeasyBase));
export { PdfOcrPdfToWordsWithLocationResponse };
