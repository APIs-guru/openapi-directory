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
var ApigeeOrganizationsSitesApicategoriesListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesListPathParams, _super);
    function ApigeeOrganizationsSitesApicategoriesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsSitesApicategoriesListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesListPathParams };
var ApigeeOrganizationsSitesApicategoriesListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesListQueryParams, _super);
    function ApigeeOrganizationsSitesApicategoriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSitesApicategoriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsSitesApicategoriesListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesListQueryParams };
var ApigeeOrganizationsSitesApicategoriesListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesListSecurity, _super);
    function ApigeeOrganizationsSitesApicategoriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsSitesApicategoriesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsSitesApicategoriesListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsSitesApicategoriesListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesListSecurity };
var ApigeeOrganizationsSitesApicategoriesListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesListRequest, _super);
    function ApigeeOrganizationsSitesApicategoriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesListPathParams)
    ], ApigeeOrganizationsSitesApicategoriesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesListQueryParams)
    ], ApigeeOrganizationsSitesApicategoriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesListSecurity)
    ], ApigeeOrganizationsSitesApicategoriesListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsSitesApicategoriesListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesListRequest };
var ApigeeOrganizationsSitesApicategoriesListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesListResponse, _super);
    function ApigeeOrganizationsSitesApicategoriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListApiCategoriesResponse)
    ], ApigeeOrganizationsSitesApicategoriesListResponse.prototype, "googleCloudApigeeV1ListApiCategoriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsSitesApicategoriesListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsSitesApicategoriesListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesListResponse };
