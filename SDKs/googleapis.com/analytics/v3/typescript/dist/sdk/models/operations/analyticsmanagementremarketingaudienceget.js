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
var AnalyticsManagementRemarketingAudienceGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceGetPathParams, _super);
    function AnalyticsManagementRemarketingAudienceGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=remarketingAudienceId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceGetPathParams.prototype, "remarketingAudienceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceGetPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementRemarketingAudienceGetPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceGetPathParams };
var AnalyticsManagementRemarketingAudienceGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceGetQueryParams, _super);
    function AnalyticsManagementRemarketingAudienceGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementRemarketingAudienceGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementRemarketingAudienceGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceGetQueryParams };
var AnalyticsManagementRemarketingAudienceGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceGetSecurityOption1, _super);
    function AnalyticsManagementRemarketingAudienceGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementRemarketingAudienceGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementRemarketingAudienceGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementRemarketingAudienceGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceGetSecurityOption1 };
var AnalyticsManagementRemarketingAudienceGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceGetSecurityOption2, _super);
    function AnalyticsManagementRemarketingAudienceGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementRemarketingAudienceGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementRemarketingAudienceGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementRemarketingAudienceGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceGetSecurityOption2 };
var AnalyticsManagementRemarketingAudienceGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceGetSecurity, _super);
    function AnalyticsManagementRemarketingAudienceGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceGetSecurityOption1)
    ], AnalyticsManagementRemarketingAudienceGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceGetSecurityOption2)
    ], AnalyticsManagementRemarketingAudienceGetSecurity.prototype, "option2", void 0);
    return AnalyticsManagementRemarketingAudienceGetSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceGetSecurity };
var AnalyticsManagementRemarketingAudienceGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceGetRequest, _super);
    function AnalyticsManagementRemarketingAudienceGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceGetPathParams)
    ], AnalyticsManagementRemarketingAudienceGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceGetQueryParams)
    ], AnalyticsManagementRemarketingAudienceGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceGetSecurity)
    ], AnalyticsManagementRemarketingAudienceGetRequest.prototype, "security", void 0);
    return AnalyticsManagementRemarketingAudienceGetRequest;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceGetRequest };
var AnalyticsManagementRemarketingAudienceGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceGetResponse, _super);
    function AnalyticsManagementRemarketingAudienceGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemarketingAudience)
    ], AnalyticsManagementRemarketingAudienceGetResponse.prototype, "remarketingAudience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementRemarketingAudienceGetResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementRemarketingAudienceGetResponse;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceGetResponse };
