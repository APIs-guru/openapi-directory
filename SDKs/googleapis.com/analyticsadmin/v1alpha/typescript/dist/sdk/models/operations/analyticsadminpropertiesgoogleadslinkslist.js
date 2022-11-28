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
var AnalyticsadminPropertiesGoogleAdsLinksListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesGoogleAdsLinksListPathParams, _super);
    function AnalyticsadminPropertiesGoogleAdsLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesGoogleAdsLinksListPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesGoogleAdsLinksListPathParams };
var AnalyticsadminPropertiesGoogleAdsLinksListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesGoogleAdsLinksListQueryParams, _super);
    function AnalyticsadminPropertiesGoogleAdsLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesGoogleAdsLinksListQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesGoogleAdsLinksListQueryParams };
var AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1, _super);
    function AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1 };
var AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2, _super);
    function AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2 };
var AnalyticsadminPropertiesGoogleAdsLinksListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesGoogleAdsLinksListSecurity, _super);
    function AnalyticsadminPropertiesGoogleAdsLinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption1)
    ], AnalyticsadminPropertiesGoogleAdsLinksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesGoogleAdsLinksListSecurityOption2)
    ], AnalyticsadminPropertiesGoogleAdsLinksListSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesGoogleAdsLinksListSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesGoogleAdsLinksListSecurity };
var AnalyticsadminPropertiesGoogleAdsLinksListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesGoogleAdsLinksListRequest, _super);
    function AnalyticsadminPropertiesGoogleAdsLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesGoogleAdsLinksListPathParams)
    ], AnalyticsadminPropertiesGoogleAdsLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesGoogleAdsLinksListQueryParams)
    ], AnalyticsadminPropertiesGoogleAdsLinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesGoogleAdsLinksListSecurity)
    ], AnalyticsadminPropertiesGoogleAdsLinksListRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesGoogleAdsLinksListRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesGoogleAdsLinksListRequest };
var AnalyticsadminPropertiesGoogleAdsLinksListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesGoogleAdsLinksListResponse, _super);
    function AnalyticsadminPropertiesGoogleAdsLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesGoogleAdsLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse)
    ], AnalyticsadminPropertiesGoogleAdsLinksListResponse.prototype, "googleAnalyticsAdminV1alphaListGoogleAdsLinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesGoogleAdsLinksListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesGoogleAdsLinksListResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesGoogleAdsLinksListResponse };
