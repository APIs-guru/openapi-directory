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
var UploadFileAsMultipartPathParams = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartPathParams, _super);
    function UploadFileAsMultipartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" }),
        __metadata("design:type", String)
    ], UploadFileAsMultipartPathParams.prototype, "uploadId", void 0);
    return UploadFileAsMultipartPathParams;
}(SpeakeasyBase));
export { UploadFileAsMultipartPathParams };
var UploadFileAsMultipartHeaders = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartHeaders, _super);
    function UploadFileAsMultipartHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" }),
        __metadata("design:type", String)
    ], UploadFileAsMultipartHeaders.prototype, "contentRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], UploadFileAsMultipartHeaders.prototype, "xSdsAuthToken", void 0);
    return UploadFileAsMultipartHeaders;
}(SpeakeasyBase));
export { UploadFileAsMultipartHeaders };
var UploadFileAsMultipartRequestBodyFile = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartRequestBodyFile, _super);
    function UploadFileAsMultipartRequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UploadFileAsMultipartRequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], UploadFileAsMultipartRequestBodyFile.prototype, "file", void 0);
    return UploadFileAsMultipartRequestBodyFile;
}(SpeakeasyBase));
export { UploadFileAsMultipartRequestBodyFile };
var UploadFileAsMultipartRequestBody = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartRequestBody, _super);
    function UploadFileAsMultipartRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", UploadFileAsMultipartRequestBodyFile)
    ], UploadFileAsMultipartRequestBody.prototype, "file", void 0);
    return UploadFileAsMultipartRequestBody;
}(SpeakeasyBase));
export { UploadFileAsMultipartRequestBody };
var UploadFileAsMultipartRequest = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartRequest, _super);
    function UploadFileAsMultipartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadFileAsMultipartPathParams)
    ], UploadFileAsMultipartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadFileAsMultipartHeaders)
    ], UploadFileAsMultipartRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadFileAsMultipartRequestBody)
    ], UploadFileAsMultipartRequest.prototype, "request", void 0);
    return UploadFileAsMultipartRequest;
}(SpeakeasyBase));
export { UploadFileAsMultipartRequest };
var UploadFileAsMultipartResponse = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartResponse, _super);
    function UploadFileAsMultipartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChunkUploadResponse)
    ], UploadFileAsMultipartResponse.prototype, "chunkUploadResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadFileAsMultipartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UploadFileAsMultipartResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadFileAsMultipartResponse.prototype, "statusCode", void 0);
    return UploadFileAsMultipartResponse;
}(SpeakeasyBase));
export { UploadFileAsMultipartResponse };
