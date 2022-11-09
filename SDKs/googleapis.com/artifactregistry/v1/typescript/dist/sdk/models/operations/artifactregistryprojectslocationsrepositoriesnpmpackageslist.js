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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListPathParams.prototype, "parent", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListPathParams };
var ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams.prototype, "uploadProtocol", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1, _super);
    function ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1 };
var ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2, _super);
    function ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2 };
var ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity.prototype, "option2", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity };
var ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest };
var ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListNpmPackagesResponse)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse.prototype, "listNpmPackagesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse.prototype, "statusCode", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse };
