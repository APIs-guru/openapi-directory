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
var ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams.prototype, "parent", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams };
var ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams.prototype, "uploadProtocol", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity };
var ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest };
var ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UploadAptArtifactMediaResponse)
    ], ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse.prototype, "uploadAptArtifactMediaResponse", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse };
