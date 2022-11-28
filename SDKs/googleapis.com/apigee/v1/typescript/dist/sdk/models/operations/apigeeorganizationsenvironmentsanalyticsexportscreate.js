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
var ApigeeOrganizationsEnvironmentsAnalyticsExportsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsAnalyticsExportsCreatePathParams, _super);
    function ApigeeOrganizationsEnvironmentsAnalyticsExportsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsEnvironmentsAnalyticsExportsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsAnalyticsExportsCreatePathParams };
var ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams, _super);
    function ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams };
var ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateSecurity, _super);
    function ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateSecurity };
var ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest, _super);
    function ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsAnalyticsExportsCreatePathParams)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateQueryParams)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1ExportRequest)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateSecurity)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateRequest };
var ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse, _super);
    function ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1Export)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse.prototype, "googleCloudApigeeV1Export", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsEnvironmentsAnalyticsExportsCreateResponse };
