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
var ApigeeOrganizationsEnvironmentsResourcefilesListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesListPathParams, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesListPathParams };
var ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams };
var ApigeeOrganizationsEnvironmentsResourcefilesListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesListSecurity, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesListSecurity };
var ApigeeOrganizationsEnvironmentsResourcefilesListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesListRequest, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesListPathParams)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesListQueryParams)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsResourcefilesListSecurity)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesListRequest };
var ApigeeOrganizationsEnvironmentsResourcefilesListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsResourcefilesListResponse, _super);
    function ApigeeOrganizationsEnvironmentsResourcefilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListEnvironmentResourcesResponse)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListResponse.prototype, "googleCloudApigeeV1ListEnvironmentResourcesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsResourcefilesListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsResourcefilesListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsResourcefilesListResponse };
