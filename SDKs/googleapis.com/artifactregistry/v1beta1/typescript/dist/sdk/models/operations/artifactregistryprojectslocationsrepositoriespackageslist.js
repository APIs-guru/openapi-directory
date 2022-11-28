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
var ArtifactregistryProjectsLocationsRepositoriesPackagesListPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesListPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListPathParams.prototype, "parent", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesListPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesListPathParams };
var ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams.prototype, "uploadProtocol", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1 };
var ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2 };
var ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity.prototype, "option2", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity };
var ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesListPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest };
var ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPackagesResponse)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse.prototype, "listPackagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse.prototype, "statusCode", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse };
