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
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListPathParams, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListPathParams };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1 };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2 };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListPathParams)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse.prototype, "googleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse };
