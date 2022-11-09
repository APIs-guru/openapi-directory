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
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams.prototype, "parent", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams };
export var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum;
(function (ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum) {
    ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum["VersionViewUnspecified"] = "VERSION_VIEW_UNSPECIFIED";
    ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum["Basic"] = "BASIC";
    ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum["Full"] = "FULL";
})(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum || (ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum = {}));
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams.prototype, "view", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1 };
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2 };
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity.prototype, "option2", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity };
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest };
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListVersionsResponse)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse.prototype, "listVersionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse.prototype, "statusCode", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse };
