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
var ApigeeOrganizationsHostSecurityReportsCreatePathParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostSecurityReportsCreatePathParams, _super);
    function ApigeeOrganizationsHostSecurityReportsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreatePathParams.prototype, "parent", void 0);
    return ApigeeOrganizationsHostSecurityReportsCreatePathParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostSecurityReportsCreatePathParams };
var ApigeeOrganizationsHostSecurityReportsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostSecurityReportsCreateQueryParams, _super);
    function ApigeeOrganizationsHostSecurityReportsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ApigeeOrganizationsHostSecurityReportsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ApigeeOrganizationsHostSecurityReportsCreateQueryParams;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostSecurityReportsCreateQueryParams };
var ApigeeOrganizationsHostSecurityReportsCreateSecurity = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostSecurityReportsCreateSecurity, _super);
    function ApigeeOrganizationsHostSecurityReportsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ApigeeOrganizationsHostSecurityReportsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ApigeeOrganizationsHostSecurityReportsCreateSecurity.prototype, "oauth2c", void 0);
    return ApigeeOrganizationsHostSecurityReportsCreateSecurity;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostSecurityReportsCreateSecurity };
var ApigeeOrganizationsHostSecurityReportsCreateRequest = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostSecurityReportsCreateRequest, _super);
    function ApigeeOrganizationsHostSecurityReportsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsHostSecurityReportsCreatePathParams)
    ], ApigeeOrganizationsHostSecurityReportsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsHostSecurityReportsCreateQueryParams)
    ], ApigeeOrganizationsHostSecurityReportsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudApigeeV1SecurityReportQuery)
    ], ApigeeOrganizationsHostSecurityReportsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApigeeOrganizationsHostSecurityReportsCreateSecurity)
    ], ApigeeOrganizationsHostSecurityReportsCreateRequest.prototype, "security", void 0);
    return ApigeeOrganizationsHostSecurityReportsCreateRequest;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostSecurityReportsCreateRequest };
var ApigeeOrganizationsHostSecurityReportsCreateResponse = /** @class */ (function (_super) {
    __extends(ApigeeOrganizationsHostSecurityReportsCreateResponse, _super);
    function ApigeeOrganizationsHostSecurityReportsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApigeeOrganizationsHostSecurityReportsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudApigeeV1SecurityReport)
    ], ApigeeOrganizationsHostSecurityReportsCreateResponse.prototype, "googleCloudApigeeV1SecurityReport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApigeeOrganizationsHostSecurityReportsCreateResponse.prototype, "statusCode", void 0);
    return ApigeeOrganizationsHostSecurityReportsCreateResponse;
}(SpeakeasyBase));
export { ApigeeOrganizationsHostSecurityReportsCreateResponse };
