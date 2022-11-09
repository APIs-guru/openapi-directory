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
var PdfOcrPdfToLinesWithLocationHeaders = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToLinesWithLocationHeaders, _super);
    function PdfOcrPdfToLinesWithLocationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], PdfOcrPdfToLinesWithLocationHeaders.prototype, "language", void 0);
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=preprocessing" }),
        __metadata("design:type", String)
    ], PdfOcrPdfToLinesWithLocationHeaders.prototype, "preprocessing", void 0);
    return PdfOcrPdfToLinesWithLocationHeaders;
}(SpeakeasyBase));
export { PdfOcrPdfToLinesWithLocationHeaders };
var PdfOcrPdfToLinesWithLocationRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToLinesWithLocationRequestBodyImageFile, _super);
    function PdfOcrPdfToLinesWithLocationRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PdfOcrPdfToLinesWithLocationRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], PdfOcrPdfToLinesWithLocationRequestBodyImageFile.prototype, "imageFile", void 0);
    return PdfOcrPdfToLinesWithLocationRequestBodyImageFile;
}(SpeakeasyBase));
export { PdfOcrPdfToLinesWithLocationRequestBodyImageFile };
var PdfOcrPdfToLinesWithLocationRequestBody = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToLinesWithLocationRequestBody, _super);
    function PdfOcrPdfToLinesWithLocationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PdfOcrPdfToLinesWithLocationRequestBodyImageFile)
    ], PdfOcrPdfToLinesWithLocationRequestBody.prototype, "imageFile", void 0);
    return PdfOcrPdfToLinesWithLocationRequestBody;
}(SpeakeasyBase));
export { PdfOcrPdfToLinesWithLocationRequestBody };
var PdfOcrPdfToLinesWithLocationSecurity = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToLinesWithLocationSecurity, _super);
    function PdfOcrPdfToLinesWithLocationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], PdfOcrPdfToLinesWithLocationSecurity.prototype, "apikey", void 0);
    return PdfOcrPdfToLinesWithLocationSecurity;
}(SpeakeasyBase));
export { PdfOcrPdfToLinesWithLocationSecurity };
var PdfOcrPdfToLinesWithLocationRequest = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToLinesWithLocationRequest, _super);
    function PdfOcrPdfToLinesWithLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PdfOcrPdfToLinesWithLocationHeaders)
    ], PdfOcrPdfToLinesWithLocationRequest.prototype, "headers", void 0);
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PdfOcrPdfToLinesWithLocationRequestBody)
    ], PdfOcrPdfToLinesWithLocationRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PdfOcrPdfToLinesWithLocationSecurity)
    ], PdfOcrPdfToLinesWithLocationRequest.prototype, "security", void 0);
    return PdfOcrPdfToLinesWithLocationRequest;
}(SpeakeasyBase));
export { PdfOcrPdfToLinesWithLocationRequest };
var PdfOcrPdfToLinesWithLocationResponse = /** @class */ (function (_super) {
    __extends(PdfOcrPdfToLinesWithLocationResponse, _super);
    function PdfOcrPdfToLinesWithLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PdfOcrPdfToLinesWithLocationResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PdfOcrPdfToLinesWithLocationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PdfToLinesWithLocationResult)
    ], PdfOcrPdfToLinesWithLocationResponse.prototype, "pdfToLinesWithLocationResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PdfOcrPdfToLinesWithLocationResponse.prototype, "statusCode", void 0);
    return PdfOcrPdfToLinesWithLocationResponse;
}(SpeakeasyBase));
export { PdfOcrPdfToLinesWithLocationResponse };
