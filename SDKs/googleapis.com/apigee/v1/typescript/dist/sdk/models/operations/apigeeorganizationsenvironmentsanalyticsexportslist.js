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
var ApigeeOrganizationsEnvironmentsAnalyticsExportsListPathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsAnalyticsExportsListPathParams, _super);
    function ApigeeOrganizationsEnvironmentsAnalyticsExportsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListPathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsAnalyticsExportsListPathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsAnalyticsExportsListPathParams };
var ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams };
var ApigeeOrganizationsEnvironmentsAnalyticsExportsListSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsAnalyticsExportsListSecurity, _super);
    function ApigeeOrganizationsEnvironmentsAnalyticsExportsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsAnalyticsExportsListSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsAnalyticsExportsListSecurity };
var ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest, _super);
    function ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsAnalyticsExportsListPathParams)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsAnalyticsExportsListQueryParams)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsAnalyticsExportsListSecurity)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsAnalyticsExportsListRequest };
var ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse, _super);
    function ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1ListExportsResponse)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse.prototype, "googleCloudApigeeV1ListExportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsAnalyticsExportsListResponse };
