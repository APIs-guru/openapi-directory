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
var GetUsersForWorkspacePathParams = /** @class */ (function (_super) {
    __extends(GetUsersForWorkspacePathParams, _super);
    function GetUsersForWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_gid" }),
        __metadata("design:type", String)
    ], GetUsersForWorkspacePathParams.prototype, "workspaceGid", void 0);
    return GetUsersForWorkspacePathParams;
}(SpeakeasyBase));
export { GetUsersForWorkspacePathParams };
var GetUsersForWorkspaceQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersForWorkspaceQueryParams, _super);
    function GetUsersForWorkspaceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetUsersForWorkspaceQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetUsersForWorkspaceQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetUsersForWorkspaceQueryParams.prototype, "optPretty", void 0);
    return GetUsersForWorkspaceQueryParams;
}(SpeakeasyBase));
export { GetUsersForWorkspaceQueryParams };
var GetUsersForWorkspace200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUsersForWorkspace200ApplicationJson, _super);
    function GetUsersForWorkspace200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.UserCompact }),
        __metadata("design:type", Array)
    ], GetUsersForWorkspace200ApplicationJson.prototype, "data", void 0);
    return GetUsersForWorkspace200ApplicationJson;
}(SpeakeasyBase));
export { GetUsersForWorkspace200ApplicationJson };
var GetUsersForWorkspaceRequest = /** @class */ (function (_super) {
    __extends(GetUsersForWorkspaceRequest, _super);
    function GetUsersForWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersForWorkspacePathParams)
    ], GetUsersForWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersForWorkspaceQueryParams)
    ], GetUsersForWorkspaceRequest.prototype, "queryParams", void 0);
    return GetUsersForWorkspaceRequest;
}(SpeakeasyBase));
export { GetUsersForWorkspaceRequest };
var GetUsersForWorkspaceResponse = /** @class */ (function (_super) {
    __extends(GetUsersForWorkspaceResponse, _super);
    function GetUsersForWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersForWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetUsersForWorkspaceResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersForWorkspaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersForWorkspace200ApplicationJson)
    ], GetUsersForWorkspaceResponse.prototype, "getUsersForWorkspace200ApplicationJsonObject", void 0);
    return GetUsersForWorkspaceResponse;
}(SpeakeasyBase));
export { GetUsersForWorkspaceResponse };
