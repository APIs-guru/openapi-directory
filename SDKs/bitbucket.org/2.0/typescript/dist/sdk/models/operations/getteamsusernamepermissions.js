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
var GetTeamsUsernamePermissionsPathParams = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsPathParams, _super);
    function GetTeamsUsernamePermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsPathParams.prototype, "username", void 0);
    return GetTeamsUsernamePermissionsPathParams;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsPathParams };
var GetTeamsUsernamePermissionsQueryParams = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsQueryParams, _super);
    function GetTeamsUsernamePermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsQueryParams.prototype, "sort", void 0);
    return GetTeamsUsernamePermissionsQueryParams;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsQueryParams };
var GetTeamsUsernamePermissionsSecurity = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsSecurity, _super);
    function GetTeamsUsernamePermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetTeamsUsernamePermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetTeamsUsernamePermissionsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamsUsernamePermissionsSecurity.prototype, "apiKey", void 0);
    return GetTeamsUsernamePermissionsSecurity;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsSecurity };
var GetTeamsUsernamePermissionsRequest = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsRequest, _super);
    function GetTeamsUsernamePermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsUsernamePermissionsPathParams)
    ], GetTeamsUsernamePermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsUsernamePermissionsQueryParams)
    ], GetTeamsUsernamePermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsUsernamePermissionsSecurity)
    ], GetTeamsUsernamePermissionsRequest.prototype, "security", void 0);
    return GetTeamsUsernamePermissionsRequest;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsRequest };
var GetTeamsUsernamePermissionsResponse = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsResponse, _super);
    function GetTeamsUsernamePermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamsUsernamePermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamsUsernamePermissionsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedTeamPermissions)
    ], GetTeamsUsernamePermissionsResponse.prototype, "paginatedTeamPermissions", void 0);
    return GetTeamsUsernamePermissionsResponse;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsResponse };
