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
var PostWorkspacesWorkspaceProjectsPathParams = /** @class */ (function (_super) {
    __extends(PostWorkspacesWorkspaceProjectsPathParams, _super);
    function PostWorkspacesWorkspaceProjectsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], PostWorkspacesWorkspaceProjectsPathParams.prototype, "workspace", void 0);
    return PostWorkspacesWorkspaceProjectsPathParams;
}(SpeakeasyBase));
export { PostWorkspacesWorkspaceProjectsPathParams };
var PostWorkspacesWorkspaceProjectsSecurity = /** @class */ (function (_super) {
    __extends(PostWorkspacesWorkspaceProjectsSecurity, _super);
    function PostWorkspacesWorkspaceProjectsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PostWorkspacesWorkspaceProjectsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], PostWorkspacesWorkspaceProjectsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], PostWorkspacesWorkspaceProjectsSecurity.prototype, "apiKey", void 0);
    return PostWorkspacesWorkspaceProjectsSecurity;
}(SpeakeasyBase));
export { PostWorkspacesWorkspaceProjectsSecurity };
var PostWorkspacesWorkspaceProjectsRequest = /** @class */ (function (_super) {
    __extends(PostWorkspacesWorkspaceProjectsRequest, _super);
    function PostWorkspacesWorkspaceProjectsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostWorkspacesWorkspaceProjectsPathParams)
    ], PostWorkspacesWorkspaceProjectsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PostWorkspacesWorkspaceProjectsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostWorkspacesWorkspaceProjectsSecurity)
    ], PostWorkspacesWorkspaceProjectsRequest.prototype, "security", void 0);
    return PostWorkspacesWorkspaceProjectsRequest;
}(SpeakeasyBase));
export { PostWorkspacesWorkspaceProjectsRequest };
var PostWorkspacesWorkspaceProjectsResponse = /** @class */ (function (_super) {
    __extends(PostWorkspacesWorkspaceProjectsResponse, _super);
    function PostWorkspacesWorkspaceProjectsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostWorkspacesWorkspaceProjectsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostWorkspacesWorkspaceProjectsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostWorkspacesWorkspaceProjectsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostWorkspacesWorkspaceProjectsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PostWorkspacesWorkspaceProjectsResponse.prototype, "project", void 0);
    return PostWorkspacesWorkspaceProjectsResponse;
}(SpeakeasyBase));
export { PostWorkspacesWorkspaceProjectsResponse };
