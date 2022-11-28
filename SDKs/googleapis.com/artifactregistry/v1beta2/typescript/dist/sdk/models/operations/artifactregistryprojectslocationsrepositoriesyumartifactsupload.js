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
var ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadPathParams.prototype, "parent", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadPathParams };
var ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams.prototype, "uploadProtocol", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity };
var ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest };
var ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UploadYumArtifactMediaResponse)
    ], ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse.prototype, "uploadYumArtifactMediaResponse", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse };
