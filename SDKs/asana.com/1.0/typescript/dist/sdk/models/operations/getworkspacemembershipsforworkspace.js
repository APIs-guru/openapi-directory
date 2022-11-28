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
var GetWorkspaceMembershipsForWorkspacePathParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipsForWorkspacePathParams, _super);
    function GetWorkspaceMembershipsForWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], GetWorkspaceMembershipsForWorkspacePathParams.prototype, "workspaceGid", void 0);
    return GetWorkspaceMembershipsForWorkspacePathParams;
}(SpeakeasyBase));
export { GetWorkspaceMembershipsForWorkspacePathParams };
var GetWorkspaceMembershipsForWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipsForWorkspaceQueryParams, _super);
    function GetWorkspaceMembershipsForWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetWorkspaceMembershipsForWorkspaceQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetWorkspaceMembershipsForWorkspaceQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetWorkspaceMembershipsForWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetWorkspaceMembershipsForWorkspaceQueryParams.prototype, "optPretty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" }),
        __metadata("design:type", String)
    ], GetWorkspaceMembershipsForWorkspaceQueryParams.prototype, "user", void 0);
    return GetWorkspaceMembershipsForWorkspaceQueryParams;
}(SpeakeasyBase));
export { GetWorkspaceMembershipsForWorkspaceQueryParams };
var GetWorkspaceMembershipsForWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipsForWorkspace200ApplicationJson, _super);
    function GetWorkspaceMembershipsForWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.WorkspaceMembershipCompact }),
        __metadata("design:type", Array)
    ], GetWorkspaceMembershipsForWorkspace200ApplicationJson.prototype, "data", void 0);
    return GetWorkspaceMembershipsForWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { GetWorkspaceMembershipsForWorkspace200ApplicationJson };
var GetWorkspaceMembershipsForWorkspaceRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipsForWorkspaceRequest, _super);
    function GetWorkspaceMembershipsForWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceMembershipsForWorkspacePathParams)
    ], GetWorkspaceMembershipsForWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceMembershipsForWorkspaceQueryParams)
    ], GetWorkspaceMembershipsForWorkspaceRequest.prototype, "queryParams", void 0);
    return GetWorkspaceMembershipsForWorkspaceRequest;
}(SpeakeasyBase));
export { GetWorkspaceMembershipsForWorkspaceRequest };
var GetWorkspaceMembershipsForWorkspaceResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceMembershipsForWorkspaceResponse, _super);
    function GetWorkspaceMembershipsForWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspaceMembershipsForWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspaceMembershipsForWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceMembershipsForWorkspace200ApplicationJson)
    ], GetWorkspaceMembershipsForWorkspaceResponse.prototype, "getWorkspaceMembershipsForWorkspace200ApplicationJsonObject", void 0);
    return GetWorkspaceMembershipsForWorkspaceResponse;
}(SpeakeasyBase));
export { GetWorkspaceMembershipsForWorkspaceResponse };
