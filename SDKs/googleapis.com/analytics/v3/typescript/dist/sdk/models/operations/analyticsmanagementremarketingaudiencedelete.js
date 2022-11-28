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
var AnalyticsManagementRemarketingAudienceDeletePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceDeletePathParams, _super);
    function AnalyticsManagementRemarketingAudienceDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=remarketingAudienceId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceDeletePathParams.prototype, "remarketingAudienceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceDeletePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementRemarketingAudienceDeletePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceDeletePathParams };
var AnalyticsManagementRemarketingAudienceDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceDeleteQueryParams, _super);
    function AnalyticsManagementRemarketingAudienceDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementRemarketingAudienceDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceDeleteQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementRemarketingAudienceDeleteQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceDeleteQueryParams };
var AnalyticsManagementRemarketingAudienceDeleteSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceDeleteSecurity, _super);
    function AnalyticsManagementRemarketingAudienceDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementRemarketingAudienceDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementRemarketingAudienceDeleteSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementRemarketingAudienceDeleteSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceDeleteSecurity };
var AnalyticsManagementRemarketingAudienceDeleteRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceDeleteRequest, _super);
    function AnalyticsManagementRemarketingAudienceDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceDeletePathParams)
    ], AnalyticsManagementRemarketingAudienceDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceDeleteQueryParams)
    ], AnalyticsManagementRemarketingAudienceDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementRemarketingAudienceDeleteSecurity)
    ], AnalyticsManagementRemarketingAudienceDeleteRequest.prototype, "security", void 0);
    return AnalyticsManagementRemarketingAudienceDeleteRequest;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceDeleteRequest };
var AnalyticsManagementRemarketingAudienceDeleteResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementRemarketingAudienceDeleteResponse, _super);
    function AnalyticsManagementRemarketingAudienceDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementRemarketingAudienceDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementRemarketingAudienceDeleteResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementRemarketingAudienceDeleteResponse;
}(SpeakeasyBase));
export { AnalyticsManagementRemarketingAudienceDeleteResponse };
