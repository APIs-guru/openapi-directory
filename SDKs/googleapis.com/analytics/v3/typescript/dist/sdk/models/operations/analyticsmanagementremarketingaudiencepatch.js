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
var AnalyticsManagementRemarketingAudiencePatchPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudiencePatchPathParams, _super);
    function AnalyticsManagementRemarketingAudiencePatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudiencePatchPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=remarketingAudienceId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudiencePatchPathParams.prototype, "remarketingAudienceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudiencePatchPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementRemarketingAudiencePatchPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudiencePatchPathParams };
var AnalyticsManagementRemarketingAudiencePatchQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudiencePatchQueryParams, _super);
    function AnalyticsManagementRemarketingAudiencePatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudiencePatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudiencePatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudiencePatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudiencePatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementRemarketingAudiencePatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudiencePatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudiencePatchQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementRemarketingAudiencePatchQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudiencePatchQueryParams };
var AnalyticsManagementRemarketingAudiencePatchSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudiencePatchSecurity, _super);
    function AnalyticsManagementRemarketingAudiencePatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementRemarketingAudiencePatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementRemarketingAudiencePatchSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementRemarketingAudiencePatchSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudiencePatchSecurity };
var AnalyticsManagementRemarketingAudiencePatchRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudiencePatchRequest, _super);
    function AnalyticsManagementRemarketingAudiencePatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudiencePatchPathParams)
    ], AnalyticsManagementRemarketingAudiencePatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudiencePatchQueryParams)
    ], AnalyticsManagementRemarketingAudiencePatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemarketingAudienceInput)
    ], AnalyticsManagementRemarketingAudiencePatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudiencePatchSecurity)
    ], AnalyticsManagementRemarketingAudiencePatchRequest.prototype, "security", void 0);
    return AnalyticsManagementRemarketingAudiencePatchRequest;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudiencePatchRequest };
var AnalyticsManagementRemarketingAudiencePatchResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudiencePatchResponse, _super);
    function AnalyticsManagementRemarketingAudiencePatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudiencePatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemarketingAudience)
    ], AnalyticsManagementRemarketingAudiencePatchResponse.prototype, "remarketingAudience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementRemarketingAudiencePatchResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementRemarketingAudiencePatchResponse;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudiencePatchResponse };
