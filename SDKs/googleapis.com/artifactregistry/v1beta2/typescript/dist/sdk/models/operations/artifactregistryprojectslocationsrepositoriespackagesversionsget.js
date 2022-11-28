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
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams.prototype, "name", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams };
export var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum;
(function (ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum) {
    ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum["VersionViewUnspecified"] = "VERSION_VIEW_UNSPECIFIED";
    ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum["Basic"] = "BASIC";
    ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum["Full"] = "FULL";
})(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum || (ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum = {}));
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams.prototype, "view", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1 };
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2 };
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity.prototype, "option2", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity };
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest };
var ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Version)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse.prototype, "version", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse };
