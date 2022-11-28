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
var UploadFileByTokenAsBinary1PathParams = /** @class */ (function (_super) {
    __extends(UploadFileByTokenAsBinary1PathParams, _super);
    function UploadFileByTokenAsBinary1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], UploadFileByTokenAsBinary1PathParams.prototype, "token", void 0);
    return UploadFileByTokenAsBinary1PathParams;
}(SpeakeasyBase));
export { UploadFileByTokenAsBinary1PathParams };
var UploadFileByTokenAsBinary1Headers = /** @class */ (function (_super) {
    __extends(UploadFileByTokenAsBinary1Headers, _super);
    function UploadFileByTokenAsBinary1Headers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" }),
        __metadata("design:type", String)
    ], UploadFileByTokenAsBinary1Headers.prototype, "contentRange", void 0);
    return UploadFileByTokenAsBinary1Headers;
}(SpeakeasyBase));
export { UploadFileByTokenAsBinary1Headers };
var UploadFileByTokenAsBinary1RequestBodyFile = /** @class */ (function (_super) {
    __extends(UploadFileByTokenAsBinary1RequestBodyFile, _super);
    function UploadFileByTokenAsBinary1RequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], UploadFileByTokenAsBinary1RequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], UploadFileByTokenAsBinary1RequestBodyFile.prototype, "file", void 0);
    return UploadFileByTokenAsBinary1RequestBodyFile;
}(SpeakeasyBase));
export { UploadFileByTokenAsBinary1RequestBodyFile };
var UploadFileByTokenAsBinary1RequestBody = /** @class */ (function (_super) {
    __extends(UploadFileByTokenAsBinary1RequestBody, _super);
    function UploadFileByTokenAsBinary1RequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", UploadFileByTokenAsBinary1RequestBodyFile)
    ], UploadFileByTokenAsBinary1RequestBody.prototype, "file", void 0);
    return UploadFileByTokenAsBinary1RequestBody;
}(SpeakeasyBase));
export { UploadFileByTokenAsBinary1RequestBody };
var UploadFileByTokenAsBinary1Request = /** @class */ (function (_super) {
    __extends(UploadFileByTokenAsBinary1Request, _super);
    function UploadFileByTokenAsBinary1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadFileByTokenAsBinary1PathParams)
    ], UploadFileByTokenAsBinary1Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UploadFileByTokenAsBinary1Headers)
    ], UploadFileByTokenAsBinary1Request.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UploadFileByTokenAsBinary1RequestBody)
    ], UploadFileByTokenAsBinary1Request.prototype, "request", void 0);
    return UploadFileByTokenAsBinary1Request;
}(SpeakeasyBase));
export { UploadFileByTokenAsBinary1Request };
var UploadFileByTokenAsBinary1Response = /** @class */ (function (_super) {
    __extends(UploadFileByTokenAsBinary1Response, _super);
    function UploadFileByTokenAsBinary1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChunkUploadResponse)
    ], UploadFileByTokenAsBinary1Response.prototype, "chunkUploadResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UploadFileByTokenAsBinary1Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UploadFileByTokenAsBinary1Response.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadFileByTokenAsBinary1Response.prototype, "uploadFileByTokenAsBinary1400ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadFileByTokenAsBinary1Response.prototype, "uploadFileByTokenAsBinary1401ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadFileByTokenAsBinary1Response.prototype, "uploadFileByTokenAsBinary1403ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadFileByTokenAsBinary1Response.prototype, "uploadFileByTokenAsBinary1404ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadFileByTokenAsBinary1Response.prototype, "uploadFileByTokenAsBinary1406ApplicationJsonOneOf", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], UploadFileByTokenAsBinary1Response.prototype, "uploadFileByTokenAsBinary1507ApplicationJsonOneOf", void 0);
    return UploadFileByTokenAsBinary1Response;
}(SpeakeasyBase));
export { UploadFileByTokenAsBinary1Response };
