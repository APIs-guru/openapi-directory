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
var UploadFileAsMultipartPublic1PathParams = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartPublic1PathParams, _super);
    function UploadFileAsMultipartPublic1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" }),
        __metadata("design:type", String)
    ], UploadFileAsMultipartPublic1PathParams.prototype, "accessKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" }),
        __metadata("design:type", String)
    ], UploadFileAsMultipartPublic1PathParams.prototype, "uploadId", void 0);
    return UploadFileAsMultipartPublic1PathParams;
}(SpeakeasyBase));
export { UploadFileAsMultipartPublic1PathParams };
var UploadFileAsMultipartPublic1Headers = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartPublic1Headers, _super);
    function UploadFileAsMultipartPublic1Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" }),
        __metadata("design:type", String)
    ], UploadFileAsMultipartPublic1Headers.prototype, "contentRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], UploadFileAsMultipartPublic1Headers.prototype, "xSdsDateFormat", void 0);
    return UploadFileAsMultipartPublic1Headers;
}(SpeakeasyBase));
export { UploadFileAsMultipartPublic1Headers };
var UploadFileAsMultipartPublic1RequestBodyFile = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartPublic1RequestBodyFile, _super);
    function UploadFileAsMultipartPublic1RequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UploadFileAsMultipartPublic1RequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], UploadFileAsMultipartPublic1RequestBodyFile.prototype, "file", void 0);
    return UploadFileAsMultipartPublic1RequestBodyFile;
}(SpeakeasyBase));
export { UploadFileAsMultipartPublic1RequestBodyFile };
var UploadFileAsMultipartPublic1RequestBody = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartPublic1RequestBody, _super);
    function UploadFileAsMultipartPublic1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", UploadFileAsMultipartPublic1RequestBodyFile)
    ], UploadFileAsMultipartPublic1RequestBody.prototype, "file", void 0);
    return UploadFileAsMultipartPublic1RequestBody;
}(SpeakeasyBase));
export { UploadFileAsMultipartPublic1RequestBody };
var UploadFileAsMultipartPublic1Request = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartPublic1Request, _super);
    function UploadFileAsMultipartPublic1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadFileAsMultipartPublic1PathParams)
    ], UploadFileAsMultipartPublic1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadFileAsMultipartPublic1Headers)
    ], UploadFileAsMultipartPublic1Request.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadFileAsMultipartPublic1RequestBody)
    ], UploadFileAsMultipartPublic1Request.prototype, "request", void 0);
    return UploadFileAsMultipartPublic1Request;
}(SpeakeasyBase));
export { UploadFileAsMultipartPublic1Request };
var UploadFileAsMultipartPublic1Response = /** @class */ (function (_super) {
    __extends(UploadFileAsMultipartPublic1Response, _super);
    function UploadFileAsMultipartPublic1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChunkUploadResponse)
    ], UploadFileAsMultipartPublic1Response.prototype, "chunkUploadResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadFileAsMultipartPublic1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UploadFileAsMultipartPublic1Response.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadFileAsMultipartPublic1Response.prototype, "statusCode", void 0);
    return UploadFileAsMultipartPublic1Response;
}(SpeakeasyBase));
export { UploadFileAsMultipartPublic1Response };
