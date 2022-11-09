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
var ApigeeregistryProjectsLocationsArtifactsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsArtifactsCreatePathParams, _super);
    function ApigeeregistryProjectsLocationsArtifactsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreatePathParams.prototype, "parent", void 0);
    return ApigeeregistryProjectsLocationsArtifactsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsArtifactsCreatePathParams };
var ApigeeregistryProjectsLocationsArtifactsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsArtifactsCreateQueryParams, _super);
    function ApigeeregistryProjectsLocationsArtifactsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=artifactId" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "artifactId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeregistryProjectsLocationsArtifactsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsArtifactsCreateQueryParams };
var ApigeeregistryProjectsLocationsArtifactsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsArtifactsCreateSecurity, _super);
    function ApigeeregistryProjectsLocationsArtifactsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeregistryProjectsLocationsArtifactsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeregistryProjectsLocationsArtifactsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeregistryProjectsLocationsArtifactsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsArtifactsCreateSecurity };
var ApigeeregistryProjectsLocationsArtifactsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsArtifactsCreateRequest, _super);
    function ApigeeregistryProjectsLocationsArtifactsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsArtifactsCreatePathParams)
    ], ApigeeregistryProjectsLocationsArtifactsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsArtifactsCreateQueryParams)
    ], ApigeeregistryProjectsLocationsArtifactsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Artifact)
    ], ApigeeregistryProjectsLocationsArtifactsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ApigeeregistryProjectsLocationsArtifactsCreateSecurity)
    ], ApigeeregistryProjectsLocationsArtifactsCreateRequest.prototype, "security", void 0);
    return ApigeeregistryProjectsLocationsArtifactsCreateRequest;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsArtifactsCreateRequest };
var ApigeeregistryProjectsLocationsArtifactsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeregistryProjectsLocationsArtifactsCreateResponse, _super);
    function ApigeeregistryProjectsLocationsArtifactsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Artifact)
    ], ApigeeregistryProjectsLocationsArtifactsCreateResponse.prototype, "artifact", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ApigeeregistryProjectsLocationsArtifactsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ApigeeregistryProjectsLocationsArtifactsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeregistryProjectsLocationsArtifactsCreateResponse;
}(SpeakeasyBase));
export { ApigeeregistryProjectsLocationsArtifactsCreateResponse };
