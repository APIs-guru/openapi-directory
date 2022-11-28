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
var GetUserPermissionsTeamsQueryParams = /** @class */ (function (_super) {
    __extends(GetUserPermissionsTeamsQueryParams, _super);
    function GetUserPermissionsTeamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetUserPermissionsTeamsQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUserPermissionsTeamsQueryParams.prototype, "sort", void 0);
    return GetUserPermissionsTeamsQueryParams;
}(SpeakeasyBase));
export { GetUserPermissionsTeamsQueryParams };
var GetUserPermissionsTeamsSecurity = /** @class */ (function (_super) {
    __extends(GetUserPermissionsTeamsSecurity, _super);
    function GetUserPermissionsTeamsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetUserPermissionsTeamsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetUserPermissionsTeamsSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetUserPermissionsTeamsSecurity.prototype, "apiKey", void 0);
    return GetUserPermissionsTeamsSecurity;
}(SpeakeasyBase));
export { GetUserPermissionsTeamsSecurity };
var GetUserPermissionsTeamsRequest = /** @class */ (function (_super) {
    __extends(GetUserPermissionsTeamsRequest, _super);
    function GetUserPermissionsTeamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserPermissionsTeamsQueryParams)
    ], GetUserPermissionsTeamsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserPermissionsTeamsSecurity)
    ], GetUserPermissionsTeamsRequest.prototype, "security", void 0);
    return GetUserPermissionsTeamsRequest;
}(SpeakeasyBase));
export { GetUserPermissionsTeamsRequest };
var GetUserPermissionsTeamsResponse = /** @class */ (function (_super) {
    __extends(GetUserPermissionsTeamsResponse, _super);
    function GetUserPermissionsTeamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserPermissionsTeamsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserPermissionsTeamsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedTeamPermissions)
    ], GetUserPermissionsTeamsResponse.prototype, "paginatedTeamPermissions", void 0);
    return GetUserPermissionsTeamsResponse;
}(SpeakeasyBase));
export { GetUserPermissionsTeamsResponse };
