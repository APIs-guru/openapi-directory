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
var PdfOcrPostHeaders = /** @class */ (function (_super) {
    __extends(PdfOcrPostHeaders, _super);
    function PdfOcrPostHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" }),
        __metadata("design:type", String)
    ], PdfOcrPostHeaders.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" }),
        __metadata("design:type", String)
    ], PdfOcrPostHeaders.prototype, "preprocessing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=recognitionMode" }),
        __metadata("design:type", String)
    ], PdfOcrPostHeaders.prototype, "recognitionMode", void 0);
    return PdfOcrPostHeaders;
}(SpeakeasyBase));
export { PdfOcrPostHeaders };
var PdfOcrPostRequestBodyImageFile = /** @class */ (function (_super) {
    __extends(PdfOcrPostRequestBodyImageFile, _super);
    function PdfOcrPostRequestBodyImageFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PdfOcrPostRequestBodyImageFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=imageFile" }),
        __metadata("design:type", String)
    ], PdfOcrPostRequestBodyImageFile.prototype, "imageFile", void 0);
    return PdfOcrPostRequestBodyImageFile;
}(SpeakeasyBase));
export { PdfOcrPostRequestBodyImageFile };
var PdfOcrPostRequestBody = /** @class */ (function (_super) {
    __extends(PdfOcrPostRequestBody, _super);
    function PdfOcrPostRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PdfOcrPostRequestBodyImageFile)
    ], PdfOcrPostRequestBody.prototype, "imageFile", void 0);
    return PdfOcrPostRequestBody;
}(SpeakeasyBase));
export { PdfOcrPostRequestBody };
var PdfOcrPostSecurity = /** @class */ (function (_super) {
    __extends(PdfOcrPostSecurity, _super);
    function PdfOcrPostSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApikey)
    ], PdfOcrPostSecurity.prototype, "apikey", void 0);
    return PdfOcrPostSecurity;
}(SpeakeasyBase));
export { PdfOcrPostSecurity };
var PdfOcrPostRequest = /** @class */ (function (_super) {
    __extends(PdfOcrPostRequest, _super);
    function PdfOcrPostRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PdfOcrPostHeaders)
    ], PdfOcrPostRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PdfOcrPostRequestBody)
    ], PdfOcrPostRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PdfOcrPostSecurity)
    ], PdfOcrPostRequest.prototype, "security", void 0);
    return PdfOcrPostRequest;
}(SpeakeasyBase));
export { PdfOcrPostRequest };
var PdfOcrPostResponse = /** @class */ (function (_super) {
    __extends(PdfOcrPostResponse, _super);
    function PdfOcrPostResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PdfOcrPostResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PdfOcrPostResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PdfToTextResponse)
    ], PdfOcrPostResponse.prototype, "pdfToTextResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PdfOcrPostResponse.prototype, "statusCode", void 0);
    return PdfOcrPostResponse;
}(SpeakeasyBase));
export { PdfOcrPostResponse };
