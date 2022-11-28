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
var GetUserPermissionsRepositoriesQueryParams = /** @class */ (function (_super) {
    __extends(GetUserPermissionsRepositoriesQueryParams, _super);
    function GetUserPermissionsRepositoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetUserPermissionsRepositoriesQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetUserPermissionsRepositoriesQueryParams.prototype, "sort", void 0);
    return GetUserPermissionsRepositoriesQueryParams;
}(SpeakeasyBase));
export { GetUserPermissionsRepositoriesQueryParams };
var GetUserPermissionsRepositoriesSecurity = /** @class */ (function (_super) {
    __extends(GetUserPermissionsRepositoriesSecurity, _super);
    function GetUserPermissionsRepositoriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GetUserPermissionsRepositoriesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasic)
    ], GetUserPermissionsRepositoriesSecurity.prototype, "basic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetUserPermissionsRepositoriesSecurity.prototype, "apiKey", void 0);
    return GetUserPermissionsRepositoriesSecurity;
}(SpeakeasyBase));
export { GetUserPermissionsRepositoriesSecurity };
var GetUserPermissionsRepositoriesRequest = /** @class */ (function (_super) {
    __extends(GetUserPermissionsRepositoriesRequest, _super);
    function GetUserPermissionsRepositoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserPermissionsRepositoriesQueryParams)
    ], GetUserPermissionsRepositoriesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUserPermissionsRepositoriesSecurity)
    ], GetUserPermissionsRepositoriesRequest.prototype, "security", void 0);
    return GetUserPermissionsRepositoriesRequest;
}(SpeakeasyBase));
export { GetUserPermissionsRepositoriesRequest };
var GetUserPermissionsRepositoriesResponse = /** @class */ (function (_super) {
    __extends(GetUserPermissionsRepositoriesResponse, _super);
    function GetUserPermissionsRepositoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUserPermissionsRepositoriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUserPermissionsRepositoriesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PaginatedRepositoryPermissions)
    ], GetUserPermissionsRepositoriesResponse.prototype, "paginatedRepositoryPermissions", void 0);
    return GetUserPermissionsRepositoriesResponse;
}(SpeakeasyBase));
export { GetUserPermissionsRepositoriesResponse };
