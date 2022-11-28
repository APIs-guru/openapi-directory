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
var ApigeeOrganizationsSitesApicategoriesCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesCreatePathParams, _super);
    function ApigeeOrganizationsSitesApicategoriesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsSitesApicategoriesCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesCreatePathParams };
var ApigeeOrganizationsSitesApicategoriesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesCreateQueryParams, _super);
    function ApigeeOrganizationsSitesApicategoriesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSitesApicategoriesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsSitesApicategoriesCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesCreateQueryParams };
var ApigeeOrganizationsSitesApicategoriesCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesCreateSecurity, _super);
    function ApigeeOrganizationsSitesApicategoriesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsSitesApicategoriesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsSitesApicategoriesCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsSitesApicategoriesCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesCreateSecurity };
var ApigeeOrganizationsSitesApicategoriesCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesCreateRequest, _super);
    function ApigeeOrganizationsSitesApicategoriesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesCreatePathParams)
    ], ApigeeOrganizationsSitesApicategoriesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesCreateQueryParams)
    ], ApigeeOrganizationsSitesApicategoriesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1ApiCategoryData)
    ], ApigeeOrganizationsSitesApicategoriesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesCreateSecurity)
    ], ApigeeOrganizationsSitesApicategoriesCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsSitesApicategoriesCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesCreateRequest };
var ApigeeOrganizationsSitesApicategoriesCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesCreateResponse, _super);
    function ApigeeOrganizationsSitesApicategoriesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ApiCategory)
    ], ApigeeOrganizationsSitesApicategoriesCreateResponse.prototype, "googleCloudApigeeV1ApiCategory", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsSitesApicategoriesCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsSitesApicategoriesCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesCreateResponse };
