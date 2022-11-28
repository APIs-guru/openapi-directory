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
var GetWorkspacesWorkspaceHooksUidPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceHooksUidPathParams, _super);
    function GetWorkspacesWorkspaceHooksUidPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uid" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspaceHooksUidPathParams.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspaceHooksUidPathParams.prototype, "workspace", void 0);
    return GetWorkspacesWorkspaceHooksUidPathParams;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceHooksUidPathParams };
var GetWorkspacesWorkspaceHooksUidSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceHooksUidSecurity, _super);
    function GetWorkspacesWorkspaceHooksUidSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetWorkspacesWorkspaceHooksUidSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetWorkspacesWorkspaceHooksUidSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetWorkspacesWorkspaceHooksUidSecurity.prototype, "apiKey", void 0);
    return GetWorkspacesWorkspaceHooksUidSecurity;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceHooksUidSecurity };
var GetWorkspacesWorkspaceHooksUidRequest = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceHooksUidRequest, _super);
    function GetWorkspacesWorkspaceHooksUidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspaceHooksUidPathParams)
    ], GetWorkspacesWorkspaceHooksUidRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspaceHooksUidSecurity)
    ], GetWorkspacesWorkspaceHooksUidRequest.prototype, "security", void 0);
    return GetWorkspacesWorkspaceHooksUidRequest;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceHooksUidRequest };
var GetWorkspacesWorkspaceHooksUidResponse = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceHooksUidResponse, _super);
    function GetWorkspacesWorkspaceHooksUidResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspaceHooksUidResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspacesWorkspaceHooksUidResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetWorkspacesWorkspaceHooksUidResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetWorkspacesWorkspaceHooksUidResponse.prototype, "webhookSubscription", void 0);
    return GetWorkspacesWorkspaceHooksUidResponse;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceHooksUidResponse };
