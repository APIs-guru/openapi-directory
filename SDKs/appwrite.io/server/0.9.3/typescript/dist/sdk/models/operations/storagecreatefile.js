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
var StorageCreateFileRequestBody = /** @class */ (function (_super) {
    __extends(StorageCreateFileRequestBody, _super);
    function StorageCreateFileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], StorageCreateFileRequestBody.prototype, "file", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=read" }),
        __metadata("design:type", Array)
    ], StorageCreateFileRequestBody.prototype, "read", void 0);
    __decorate([
        Metadata({ data: "multipart_form, name=write" }),
        __metadata("design:type", Array)
    ], StorageCreateFileRequestBody.prototype, "write", void 0);
    return StorageCreateFileRequestBody;
}(SpeakeasyBase));
export { StorageCreateFileRequestBody };
var StorageCreateFileSecurity = /** @class */ (function (_super) {
    __extends(StorageCreateFileSecurity, _super);
    function StorageCreateFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], StorageCreateFileSecurity.prototype, "jwt", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], StorageCreateFileSecurity.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], StorageCreateFileSecurity.prototype, "project", void 0);
    return StorageCreateFileSecurity;
}(SpeakeasyBase));
export { StorageCreateFileSecurity };
var StorageCreateFileRequest = /** @class */ (function (_super) {
    __extends(StorageCreateFileRequest, _super);
    function StorageCreateFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", StorageCreateFileRequestBody)
    ], StorageCreateFileRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", StorageCreateFileSecurity)
    ], StorageCreateFileRequest.prototype, "security", void 0);
    return StorageCreateFileRequest;
}(SpeakeasyBase));
export { StorageCreateFileRequest };
var StorageCreateFileResponse = /** @class */ (function (_super) {
    __extends(StorageCreateFileResponse, _super);
    function StorageCreateFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], StorageCreateFileResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], StorageCreateFileResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.File)
    ], StorageCreateFileResponse.prototype, "file", void 0);
    return StorageCreateFileResponse;
}(SpeakeasyBase));
export { StorageCreateFileResponse };
