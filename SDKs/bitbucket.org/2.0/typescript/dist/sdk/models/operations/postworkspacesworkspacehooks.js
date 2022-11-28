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
var PostWorkspacesWorkspaceHooksPathParams = /** @class */ (function (_super) {
    __extends(PostWorkspacesWorkspaceHooksPathParams, _super);
    function PostWorkspacesWorkspaceHooksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PostWorkspacesWorkspaceHooksPathParams.prototype, "workspace", void 0);
    return PostWorkspacesWorkspaceHooksPathParams;
}(SpeakeasyBase));
export { PostWorkspacesWorkspaceHooksPathParams };
var PostWorkspacesWorkspaceHooksSecurity = /** @class */ (function (_super) {
    __extends(PostWorkspacesWorkspaceHooksSecurity, _super);
    function PostWorkspacesWorkspaceHooksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostWorkspacesWorkspaceHooksSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PostWorkspacesWorkspaceHooksSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PostWorkspacesWorkspaceHooksSecurity.prototype, "apiKey", void 0);
    return PostWorkspacesWorkspaceHooksSecurity;
}(SpeakeasyBase));
export { PostWorkspacesWorkspaceHooksSecurity };
var PostWorkspacesWorkspaceHooksRequest = /** @class */ (function (_super) {
    __extends(PostWorkspacesWorkspaceHooksRequest, _super);
    function PostWorkspacesWorkspaceHooksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostWorkspacesWorkspaceHooksPathParams)
    ], PostWorkspacesWorkspaceHooksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostWorkspacesWorkspaceHooksSecurity)
    ], PostWorkspacesWorkspaceHooksRequest.prototype, "security", void 0);
    return PostWorkspacesWorkspaceHooksRequest;
}(SpeakeasyBase));
export { PostWorkspacesWorkspaceHooksRequest };
var PostWorkspacesWorkspaceHooksResponse = /** @class */ (function (_super) {
    __extends(PostWorkspacesWorkspaceHooksResponse, _super);
    function PostWorkspacesWorkspaceHooksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostWorkspacesWorkspaceHooksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostWorkspacesWorkspaceHooksResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostWorkspacesWorkspaceHooksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostWorkspacesWorkspaceHooksResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostWorkspacesWorkspaceHooksResponse.prototype, "webhookSubscription", void 0);
    return PostWorkspacesWorkspaceHooksResponse;
}(SpeakeasyBase));
export { PostWorkspacesWorkspaceHooksResponse };
