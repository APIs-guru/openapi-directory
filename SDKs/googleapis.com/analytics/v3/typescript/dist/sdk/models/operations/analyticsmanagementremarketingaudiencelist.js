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
var AnalyticsManagementRemarketingAudienceListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceListPathParams, _super);
    function AnalyticsManagementRemarketingAudienceListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementRemarketingAudienceListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceListPathParams };
var AnalyticsManagementRemarketingAudienceListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceListQueryParams, _super);
    function AnalyticsManagementRemarketingAudienceListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementRemarketingAudienceListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementRemarketingAudienceListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementRemarketingAudienceListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementRemarketingAudienceListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceListQueryParams };
var AnalyticsManagementRemarketingAudienceListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceListSecurityOption1, _super);
    function AnalyticsManagementRemarketingAudienceListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementRemarketingAudienceListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementRemarketingAudienceListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementRemarketingAudienceListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceListSecurityOption1 };
var AnalyticsManagementRemarketingAudienceListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceListSecurityOption2, _super);
    function AnalyticsManagementRemarketingAudienceListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementRemarketingAudienceListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementRemarketingAudienceListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementRemarketingAudienceListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceListSecurityOption2 };
var AnalyticsManagementRemarketingAudienceListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceListSecurity, _super);
    function AnalyticsManagementRemarketingAudienceListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceListSecurityOption1)
    ], AnalyticsManagementRemarketingAudienceListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceListSecurityOption2)
    ], AnalyticsManagementRemarketingAudienceListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementRemarketingAudienceListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceListSecurity };
var AnalyticsManagementRemarketingAudienceListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceListRequest, _super);
    function AnalyticsManagementRemarketingAudienceListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceListPathParams)
    ], AnalyticsManagementRemarketingAudienceListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceListQueryParams)
    ], AnalyticsManagementRemarketingAudienceListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceListSecurity)
    ], AnalyticsManagementRemarketingAudienceListRequest.prototype, "security", void 0);
    return AnalyticsManagementRemarketingAudienceListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceListRequest };
var AnalyticsManagementRemarketingAudienceListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceListResponse, _super);
    function AnalyticsManagementRemarketingAudienceListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemarketingAudiences)
    ], AnalyticsManagementRemarketingAudienceListResponse.prototype, "remarketingAudiences", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementRemarketingAudienceListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementRemarketingAudienceListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceListResponse };
