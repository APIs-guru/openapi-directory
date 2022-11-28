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
var ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams.prototype, "name", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams };
export var ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum;
(function (ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum) {
    ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum["VersionViewUnspecified"] = "VERSION_VIEW_UNSPECIFIED";
    ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum["Basic"] = "BASIC";
    ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum["Full"] = "FULL";
})(ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum || (ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum = {}));
var ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams.prototype, "view", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1 };
var ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2 };
var ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity.prototype, "option2", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity };
var ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest };
var ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PythonPackage)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse.prototype, "pythonPackage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse.prototype, "statusCode", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse };
