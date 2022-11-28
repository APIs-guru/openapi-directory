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
var GetWorkspacesWorkspacePermissionsRepositoriesPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsRepositoriesPathParams, _super);
    function GetWorkspacesWorkspacePermissionsRepositoriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsRepositoriesPathParams.prototype, "workspace", void 0);
    return GetWorkspacesWorkspacePermissionsRepositoriesPathParams;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsRepositoriesPathParams };
var GetWorkspacesWorkspacePermissionsRepositoriesQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsRepositoriesQueryParams, _super);
    function GetWorkspacesWorkspacePermissionsRepositoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsRepositoriesQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsRepositoriesQueryParams.prototype, "sort", void 0);
    return GetWorkspacesWorkspacePermissionsRepositoriesQueryParams;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsRepositoriesQueryParams };
var GetWorkspacesWorkspacePermissionsRepositoriesSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsRepositoriesSecurity, _super);
    function GetWorkspacesWorkspacePermissionsRepositoriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetWorkspacesWorkspacePermissionsRepositoriesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetWorkspacesWorkspacePermissionsRepositoriesSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetWorkspacesWorkspacePermissionsRepositoriesSecurity.prototype, "apiKey", void 0);
    return GetWorkspacesWorkspacePermissionsRepositoriesSecurity;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsRepositoriesSecurity };
var GetWorkspacesWorkspacePermissionsRepositoriesRequest = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsRepositoriesRequest, _super);
    function GetWorkspacesWorkspacePermissionsRepositoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspacePermissionsRepositoriesPathParams)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspacePermissionsRepositoriesQueryParams)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspacePermissionsRepositoriesSecurity)
    ], GetWorkspacesWorkspacePermissionsRepositoriesRequest.prototype, "security", void 0);
    return GetWorkspacesWorkspacePermissionsRepositoriesRequest;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsRepositoriesRequest };
var GetWorkspacesWorkspacePermissionsRepositoriesResponse = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsRepositoriesResponse, _super);
    function GetWorkspacesWorkspacePermissionsRepositoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsRepositoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspacesWorkspacePermissionsRepositoriesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetWorkspacesWorkspacePermissionsRepositoriesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedRepositoryPermissions)
    ], GetWorkspacesWorkspacePermissionsRepositoriesResponse.prototype, "paginatedRepositoryPermissions", void 0);
    return GetWorkspacesWorkspacePermissionsRepositoriesResponse;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsRepositoriesResponse };
