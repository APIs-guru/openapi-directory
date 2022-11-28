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
var StorageUpdateFilePathParams = /** @class */ (function (_super) {
    __extends(StorageUpdateFilePathParams, _super);
    function StorageUpdateFilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], StorageUpdateFilePathParams.prototype, "fileId", void 0);
    return StorageUpdateFilePathParams;
}(SpeakeasyBase));
export { StorageUpdateFilePathParams };
var StorageUpdateFileRequestBody = /** @class */ (function (_super) {
    __extends(StorageUpdateFileRequestBody, _super);
    function StorageUpdateFileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=read" }),
        __metadata("design:type", Array)
    ], StorageUpdateFileRequestBody.prototype, "read", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=write" }),
        __metadata("design:type", Array)
    ], StorageUpdateFileRequestBody.prototype, "write", void 0);
    return StorageUpdateFileRequestBody;
}(SpeakeasyBase));
export { StorageUpdateFileRequestBody };
var StorageUpdateFileSecurity = /** @class */ (function (_super) {
    __extends(StorageUpdateFileSecurity, _super);
    function StorageUpdateFileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], StorageUpdateFileSecurity.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], StorageUpdateFileSecurity.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], StorageUpdateFileSecurity.prototype, "project", void 0);
    return StorageUpdateFileSecurity;
}(SpeakeasyBase));
export { StorageUpdateFileSecurity };
var StorageUpdateFileRequest = /** @class */ (function (_super) {
    __extends(StorageUpdateFileRequest, _super);
    function StorageUpdateFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageUpdateFilePathParams)
    ], StorageUpdateFileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StorageUpdateFileRequestBody)
    ], StorageUpdateFileRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageUpdateFileSecurity)
    ], StorageUpdateFileRequest.prototype, "security", void 0);
    return StorageUpdateFileRequest;
}(SpeakeasyBase));
export { StorageUpdateFileRequest };
var StorageUpdateFileResponse = /** @class */ (function (_super) {
    __extends(StorageUpdateFileResponse, _super);
    function StorageUpdateFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageUpdateFileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageUpdateFileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.File)
    ], StorageUpdateFileResponse.prototype, "file", void 0);
    return StorageUpdateFileResponse;
}(SpeakeasyBase));
export { StorageUpdateFileResponse };
