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
var ApigeeOrganizationsSitesApicategoriesDeletePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesDeletePathParams, _super);
    function ApigeeOrganizationsSitesApicategoriesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeletePathParams.prototype, "name", void 0);
    return ApigeeOrganizationsSitesApicategoriesDeletePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesDeletePathParams };
export var ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum;
(function (ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum) {
    ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum["DeletionRetentionUnspecified"] = "DELETION_RETENTION_UNSPECIFIED";
    ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum["Minimum"] = "MINIMUM";
})(ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum || (ApigeeOrganizationsSitesApicategoriesDeleteRetentionEnum = {}));
var ApigeeOrganizationsSitesApicategoriesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesDeleteQueryParams, _super);
    function ApigeeOrganizationsSitesApicategoriesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=retention" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "retention", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsSitesApicategoriesDeleteQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesDeleteQueryParams };
var ApigeeOrganizationsSitesApicategoriesDeleteSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesDeleteSecurity, _super);
    function ApigeeOrganizationsSitesApicategoriesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsSitesApicategoriesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsSitesApicategoriesDeleteSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsSitesApicategoriesDeleteSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesDeleteSecurity };
var ApigeeOrganizationsSitesApicategoriesDeleteRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesDeleteRequest, _super);
    function ApigeeOrganizationsSitesApicategoriesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesDeletePathParams)
    ], ApigeeOrganizationsSitesApicategoriesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesDeleteQueryParams)
    ], ApigeeOrganizationsSitesApicategoriesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsSitesApicategoriesDeleteSecurity)
    ], ApigeeOrganizationsSitesApicategoriesDeleteRequest.prototype, "security", void 0);
    return ApigeeOrganizationsSitesApicategoriesDeleteRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesDeleteRequest };
var ApigeeOrganizationsSitesApicategoriesDeleteResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsSitesApicategoriesDeleteResponse, _super);
    function ApigeeOrganizationsSitesApicategoriesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsSitesApicategoriesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ApiResponseWrapper)
    ], ApigeeOrganizationsSitesApicategoriesDeleteResponse.prototype, "googleCloudApigeeV1ApiResponseWrapper", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsSitesApicategoriesDeleteResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsSitesApicategoriesDeleteResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsSitesApicategoriesDeleteResponse };
