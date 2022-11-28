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
var GetWorkspacesWorkspacePermissionsPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsPathParams, _super);
    function GetWorkspacesWorkspacePermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsPathParams.prototype, "workspace", void 0);
    return GetWorkspacesWorkspacePermissionsPathParams;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsPathParams };
var GetWorkspacesWorkspacePermissionsQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsQueryParams, _super);
    function GetWorkspacesWorkspacePermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsQueryParams.prototype, "q", void 0);
    return GetWorkspacesWorkspacePermissionsQueryParams;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsQueryParams };
var GetWorkspacesWorkspacePermissionsSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsSecurity, _super);
    function GetWorkspacesWorkspacePermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetWorkspacesWorkspacePermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetWorkspacesWorkspacePermissionsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetWorkspacesWorkspacePermissionsSecurity.prototype, "apiKey", void 0);
    return GetWorkspacesWorkspacePermissionsSecurity;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsSecurity };
var GetWorkspacesWorkspacePermissionsRequest = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsRequest, _super);
    function GetWorkspacesWorkspacePermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspacePermissionsPathParams)
    ], GetWorkspacesWorkspacePermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspacePermissionsQueryParams)
    ], GetWorkspacesWorkspacePermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspacesWorkspacePermissionsSecurity)
    ], GetWorkspacesWorkspacePermissionsRequest.prototype, "security", void 0);
    return GetWorkspacesWorkspacePermissionsRequest;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsRequest };
var GetWorkspacesWorkspacePermissionsResponse = /** @class */ (function (_super) {
    __extends(GetWorkspacesWorkspacePermissionsResponse, _super);
    function GetWorkspacesWorkspacePermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspacesWorkspacePermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspacesWorkspacePermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetWorkspacesWorkspacePermissionsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedWorkspaceMemberships)
    ], GetWorkspacesWorkspacePermissionsResponse.prototype, "paginatedWorkspaceMemberships", void 0);
    return GetWorkspacesWorkspacePermissionsResponse;
}(SpeakeasyBase));
export { GetWorkspacesWorkspacePermissionsResponse };
