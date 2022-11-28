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
var ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchPathParams.prototype, "name", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchPathParams };
var ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity };
var ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Tag)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest };
var ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tag)
    ], ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse.prototype, "tag", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse };
