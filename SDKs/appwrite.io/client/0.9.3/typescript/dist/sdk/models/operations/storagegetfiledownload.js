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
var StorageGetFileDownloadPathParams = /** @class */ (function (_super) {
    __extends(StorageGetFileDownloadPathParams, _super);
    function StorageGetFileDownloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" }),
        __metadata("design:type", String)
    ], StorageGetFileDownloadPathParams.prototype, "fileId", void 0);
    return StorageGetFileDownloadPathParams;
}(SpeakeasyBase));
export { StorageGetFileDownloadPathParams };
var StorageGetFileDownloadSecurity = /** @class */ (function (_super) {
    __extends(StorageGetFileDownloadSecurity, _super);
    function StorageGetFileDownloadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], StorageGetFileDownloadSecurity.prototype, "jwt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], StorageGetFileDownloadSecurity.prototype, "project", void 0);
    return StorageGetFileDownloadSecurity;
}(SpeakeasyBase));
export { StorageGetFileDownloadSecurity };
var StorageGetFileDownloadRequest = /** @class */ (function (_super) {
    __extends(StorageGetFileDownloadRequest, _super);
    function StorageGetFileDownloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageGetFileDownloadPathParams)
    ], StorageGetFileDownloadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StorageGetFileDownloadSecurity)
    ], StorageGetFileDownloadRequest.prototype, "security", void 0);
    return StorageGetFileDownloadRequest;
}(SpeakeasyBase));
export { StorageGetFileDownloadRequest };
var StorageGetFileDownloadResponse = /** @class */ (function (_super) {
    __extends(StorageGetFileDownloadResponse, _super);
    function StorageGetFileDownloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StorageGetFileDownloadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StorageGetFileDownloadResponse.prototype, "statusCode", void 0);
    return StorageGetFileDownloadResponse;
}(SpeakeasyBase));
export { StorageGetFileDownloadResponse };
