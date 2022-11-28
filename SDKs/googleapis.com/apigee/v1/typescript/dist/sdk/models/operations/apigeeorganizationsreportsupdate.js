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
var ApigeeOrganizationsReportsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsReportsUpdatePathParams, _super);
    function ApigeeOrganizationsReportsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdatePathParams.prototype, "name", void 0);
    return ApigeeOrganizationsReportsUpdatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsReportsUpdatePathParams };
var ApigeeOrganizationsReportsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsReportsUpdateQueryParams, _super);
    function ApigeeOrganizationsReportsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreExpiryValidation" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "ignoreExpiryValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreNewlineValidation" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "ignoreNewlineValidation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsReportsUpdateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsReportsUpdateQueryParams };
var ApigeeOrganizationsReportsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsReportsUpdateSecurity, _super);
    function ApigeeOrganizationsReportsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsReportsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsReportsUpdateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsReportsUpdateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsReportsUpdateSecurity };
var ApigeeOrganizationsReportsUpdateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsReportsUpdateRequest, _super);
    function ApigeeOrganizationsReportsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsReportsUpdatePathParams)
    ], ApigeeOrganizationsReportsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsReportsUpdateQueryParams)
    ], ApigeeOrganizationsReportsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1CustomReportInput)
    ], ApigeeOrganizationsReportsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsReportsUpdateSecurity)
    ], ApigeeOrganizationsReportsUpdateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsReportsUpdateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsReportsUpdateRequest };
var ApigeeOrganizationsReportsUpdateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsReportsUpdateResponse, _super);
    function ApigeeOrganizationsReportsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsReportsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1CustomReport)
    ], ApigeeOrganizationsReportsUpdateResponse.prototype, "googleCloudApigeeV1CustomReport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsReportsUpdateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsReportsUpdateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsReportsUpdateResponse };
