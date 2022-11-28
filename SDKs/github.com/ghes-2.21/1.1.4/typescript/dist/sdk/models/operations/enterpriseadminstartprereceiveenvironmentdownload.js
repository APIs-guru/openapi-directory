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
var EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams, _super);
    function EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams.prototype, "preReceiveEnvironmentId", void 0);
    return EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams };
var EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors = /** @class */ (function (_super) {
    __extends(EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors, _super);
    function EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors.prototype, "resource", void 0);
    return EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors;
}(SpeakeasyBase));
export { EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors };
var EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson = /** @class */ (function (_super) {
    __extends(EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson, _super);
    function EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonErrors }),
        __metadata("design:type", Array)
    ], EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson.prototype, "message", void 0);
    return EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson;
}(SpeakeasyBase));
export { EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson };
var EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest, _super);
    function EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminStartPreReceiveEnvironmentDownloadPathParams)
    ], EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest.prototype, "pathParams", void 0);
    return EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest;
}(SpeakeasyBase));
export { EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest };
var EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse, _super);
    function EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJson)
    ], EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse.prototype, "enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreReceiveEnvironmentDownloadStatus)
    ], EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse.prototype, "preReceiveEnvironmentDownloadStatus", void 0);
    return EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse;
}(SpeakeasyBase));
export { EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse };
