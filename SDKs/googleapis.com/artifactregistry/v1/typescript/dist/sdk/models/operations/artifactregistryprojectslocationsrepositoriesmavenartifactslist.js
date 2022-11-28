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
var ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListPathParams.prototype, "parent", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListPathParams };
var ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams.prototype, "uploadProtocol", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1, _super);
    function ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1 };
var ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2, _super);
    function ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2 };
var ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity.prototype, "option2", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity };
var ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest };
var ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListMavenArtifactsResponse)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse.prototype, "listMavenArtifactsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse.prototype, "statusCode", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse };
