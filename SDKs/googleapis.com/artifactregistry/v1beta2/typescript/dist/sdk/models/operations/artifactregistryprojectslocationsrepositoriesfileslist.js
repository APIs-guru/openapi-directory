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
var ArtifactregistryProjectsLocationsRepositoriesFilesListPathParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesFilesListPathParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesFilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListPathParams.prototype, "parent", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesFilesListPathParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesFilesListPathParams };
var ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams, _super);
    function ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams.prototype, "uploadProtocol", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams };
var ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1, _super);
    function ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1 };
var ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2, _super);
    function ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2.prototype, "oauth2c", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2 };
var ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity, _super);
    function ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity.prototype, "option2", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity };
var ArtifactregistryProjectsLocationsRepositoriesFilesListRequest = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesFilesListRequest, _super);
    function ArtifactregistryProjectsLocationsRepositoriesFilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesFilesListPathParams)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListRequest.prototype, "security", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesFilesListRequest;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesFilesListRequest };
var ArtifactregistryProjectsLocationsRepositoriesFilesListResponse = /** @class */ (function (_super) {
    __extends(ArtifactregistryProjectsLocationsRepositoriesFilesListResponse, _super);
    function ArtifactregistryProjectsLocationsRepositoriesFilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFilesResponse)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListResponse.prototype, "listFilesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ArtifactregistryProjectsLocationsRepositoriesFilesListResponse.prototype, "statusCode", void 0);
    return ArtifactregistryProjectsLocationsRepositoriesFilesListResponse;
}(SpeakeasyBase));
export { ArtifactregistryProjectsLocationsRepositoriesFilesListResponse };
