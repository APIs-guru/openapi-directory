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
var AnalyticsManagementRemarketingAudienceUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceUpdatePathParams, _super);
    function AnalyticsManagementRemarketingAudienceUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=remarketingAudienceId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceUpdatePathParams.prototype, "remarketingAudienceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementRemarketingAudienceUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceUpdatePathParams };
var AnalyticsManagementRemarketingAudienceUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceUpdateQueryParams, _super);
    function AnalyticsManagementRemarketingAudienceUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementRemarketingAudienceUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementRemarketingAudienceUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceUpdateQueryParams };
var AnalyticsManagementRemarketingAudienceUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceUpdateSecurity, _super);
    function AnalyticsManagementRemarketingAudienceUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementRemarketingAudienceUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementRemarketingAudienceUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementRemarketingAudienceUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceUpdateSecurity };
var AnalyticsManagementRemarketingAudienceUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceUpdateRequest, _super);
    function AnalyticsManagementRemarketingAudienceUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceUpdatePathParams)
    ], AnalyticsManagementRemarketingAudienceUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceUpdateQueryParams)
    ], AnalyticsManagementRemarketingAudienceUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RemarketingAudienceInput)
    ], AnalyticsManagementRemarketingAudienceUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceUpdateSecurity)
    ], AnalyticsManagementRemarketingAudienceUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementRemarketingAudienceUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceUpdateRequest };
var AnalyticsManagementRemarketingAudienceUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceUpdateResponse, _super);
    function AnalyticsManagementRemarketingAudienceUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RemarketingAudience)
    ], AnalyticsManagementRemarketingAudienceUpdateResponse.prototype, "remarketingAudience", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementRemarketingAudienceUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementRemarketingAudienceUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceUpdateResponse };
