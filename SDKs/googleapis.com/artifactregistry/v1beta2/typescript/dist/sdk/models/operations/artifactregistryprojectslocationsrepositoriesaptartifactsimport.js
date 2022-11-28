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
var ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportPathParams.prototype, "parent", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportPathParams };
var ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams.prototype, "uploadProtocol", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity };
var ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImportAptArtifactsRequest)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportRequest };
var ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse.prototype, "statusCode", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesAptArtifactsImportResponse };
