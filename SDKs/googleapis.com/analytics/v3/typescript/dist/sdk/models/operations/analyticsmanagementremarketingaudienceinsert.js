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
var AnalyticsManagementRemarketingAudienceInsertPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceInsertPathParams, _super);
    function AnalyticsManagementRemarketingAudienceInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceInsertPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceInsertPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementRemarketingAudienceInsertPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceInsertPathParams };
var AnalyticsManagementRemarketingAudienceInsertQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceInsertQueryParams, _super);
    function AnalyticsManagementRemarketingAudienceInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementRemarketingAudienceInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceInsertQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementRemarketingAudienceInsertQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceInsertQueryParams };
var AnalyticsManagementRemarketingAudienceInsertSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceInsertSecurity, _super);
    function AnalyticsManagementRemarketingAudienceInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementRemarketingAudienceInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementRemarketingAudienceInsertSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementRemarketingAudienceInsertSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceInsertSecurity };
var AnalyticsManagementRemarketingAudienceInsertRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceInsertRequest, _super);
    function AnalyticsManagementRemarketingAudienceInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceInsertPathParams)
    ], AnalyticsManagementRemarketingAudienceInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceInsertQueryParams)
    ], AnalyticsManagementRemarketingAudienceInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemarketingAudienceInput)
    ], AnalyticsManagementRemarketingAudienceInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceInsertSecurity)
    ], AnalyticsManagementRemarketingAudienceInsertRequest.prototype, "security", void 0);
    return AnalyticsManagementRemarketingAudienceInsertRequest;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceInsertRequest };
var AnalyticsManagementRemarketingAudienceInsertResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceInsertResponse, _super);
    function AnalyticsManagementRemarketingAudienceInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemarketingAudience)
    ], AnalyticsManagementRemarketingAudienceInsertResponse.prototype, "remarketingAudience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementRemarketingAudienceInsertResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementRemarketingAudienceInsertResponse;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceInsertResponse };
