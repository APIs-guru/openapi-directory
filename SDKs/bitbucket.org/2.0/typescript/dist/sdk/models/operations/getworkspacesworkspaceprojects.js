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
var GetWorkspacesWorkspaceProjectsPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceProjectsPathParams, _super);
    function GetWorkspacesWorkspaceProjectsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspaceProjectsPathParams.prototype, "workspace", void 0);
    return GetWorkspacesWorkspaceProjectsPathParams;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceProjectsPathParams };
var GetWorkspacesWorkspaceProjectsSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceProjectsSecurity, _super);
    function GetWorkspacesWorkspaceProjectsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetWorkspacesWorkspaceProjectsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetWorkspacesWorkspaceProjectsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetWorkspacesWorkspaceProjectsSecurity.prototype, "apiKey", void 0);
    return GetWorkspacesWorkspaceProjectsSecurity;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceProjectsSecurity };
var GetWorkspacesWorkspaceProjectsRequest = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceProjectsRequest, _super);
    function GetWorkspacesWorkspaceProjectsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspaceProjectsPathParams)
    ], GetWorkspacesWorkspaceProjectsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspaceProjectsSecurity)
    ], GetWorkspacesWorkspaceProjectsRequest.prototype, "security", void 0);
    return GetWorkspacesWorkspaceProjectsRequest;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceProjectsRequest };
var GetWorkspacesWorkspaceProjectsResponse = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspaceProjectsResponse, _super);
    function GetWorkspacesWorkspaceProjectsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspaceProjectsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspacesWorkspaceProjectsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetWorkspacesWorkspaceProjectsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedProjects)
    ], GetWorkspacesWorkspaceProjectsResponse.prototype, "paginatedProjects", void 0);
    return GetWorkspacesWorkspaceProjectsResponse;
}(SpeakeasyBase));
export { GetWorkspacesWorkspaceProjectsResponse };
