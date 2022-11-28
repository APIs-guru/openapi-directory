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
var GetTeamsUsernamePermissionsRepositoriesPathParams = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsRepositoriesPathParams, _super);
    function GetTeamsUsernamePermissionsRepositoriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsRepositoriesPathParams.prototype, "username", void 0);
    return GetTeamsUsernamePermissionsRepositoriesPathParams;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsRepositoriesPathParams };
var GetTeamsUsernamePermissionsRepositoriesQueryParams = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsRepositoriesQueryParams, _super);
    function GetTeamsUsernamePermissionsRepositoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsRepositoriesQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsRepositoriesQueryParams.prototype, "sort", void 0);
    return GetTeamsUsernamePermissionsRepositoriesQueryParams;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsRepositoriesQueryParams };
var GetTeamsUsernamePermissionsRepositoriesSecurity = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsRepositoriesSecurity, _super);
    function GetTeamsUsernamePermissionsRepositoriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetTeamsUsernamePermissionsRepositoriesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetTeamsUsernamePermissionsRepositoriesSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamsUsernamePermissionsRepositoriesSecurity.prototype, "apiKey", void 0);
    return GetTeamsUsernamePermissionsRepositoriesSecurity;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsRepositoriesSecurity };
var GetTeamsUsernamePermissionsRepositoriesRequest = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsRepositoriesRequest, _super);
    function GetTeamsUsernamePermissionsRepositoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsUsernamePermissionsRepositoriesPathParams)
    ], GetTeamsUsernamePermissionsRepositoriesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsUsernamePermissionsRepositoriesQueryParams)
    ], GetTeamsUsernamePermissionsRepositoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamsUsernamePermissionsRepositoriesSecurity)
    ], GetTeamsUsernamePermissionsRepositoriesRequest.prototype, "security", void 0);
    return GetTeamsUsernamePermissionsRepositoriesRequest;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsRepositoriesRequest };
var GetTeamsUsernamePermissionsRepositoriesResponse = /** @class */ (function (_super) {
    __extends(GetTeamsUsernamePermissionsRepositoriesResponse, _super);
    function GetTeamsUsernamePermissionsRepositoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamsUsernamePermissionsRepositoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamsUsernamePermissionsRepositoriesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamsUsernamePermissionsRepositoriesResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedRepositoryPermissions)
    ], GetTeamsUsernamePermissionsRepositoriesResponse.prototype, "paginatedRepositoryPermissions", void 0);
    return GetTeamsUsernamePermissionsRepositoriesResponse;
}(SpeakeasyBase));
export { GetTeamsUsernamePermissionsRepositoriesResponse };
