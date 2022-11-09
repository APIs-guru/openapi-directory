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
var ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadPathParams.prototype, "parent", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadPathParams };
var ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams.prototype, "uploadProtocol", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity };
var ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest };
var ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.UploadKfpArtifactMediaResponse)
    ], ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse.prototype, "uploadKfpArtifactMediaResponse", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse };
