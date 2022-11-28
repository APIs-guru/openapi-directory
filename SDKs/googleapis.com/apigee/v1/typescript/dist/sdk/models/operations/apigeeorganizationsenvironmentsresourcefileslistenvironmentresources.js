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
var ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesPathParams, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesPathParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesPathParams.prototype, "type", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesPathParams };
var ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams };
var ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesSecurity, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesSecurity };
var ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesPathParams)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesQueryParams)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesSecurity)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesRequest };
var ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListEnvironmentResourcesResponse)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse.prototype, "googleCloudApigeeV1ListEnvironmentResourcesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesListEnvironmentResourcesResponse };
