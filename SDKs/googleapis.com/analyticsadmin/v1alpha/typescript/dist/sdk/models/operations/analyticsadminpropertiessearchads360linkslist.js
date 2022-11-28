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
var AnalyticsadminPropertiesSearchAds360LinksListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksListPathParams, _super);
    function AnalyticsadminPropertiesSearchAds360LinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListPathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksListPathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksListPathParams };
var AnalyticsadminPropertiesSearchAds360LinksListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksListQueryParams, _super);
    function AnalyticsadminPropertiesSearchAds360LinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksListQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksListQueryParams };
var AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1, _super);
    function AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1 };
var AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2, _super);
    function AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2 };
var AnalyticsadminPropertiesSearchAds360LinksListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksListSecurity, _super);
    function AnalyticsadminPropertiesSearchAds360LinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesSearchAds360LinksListSecurityOption1)
    ], AnalyticsadminPropertiesSearchAds360LinksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsadminPropertiesSearchAds360LinksListSecurityOption2)
    ], AnalyticsadminPropertiesSearchAds360LinksListSecurity.prototype, "option2", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksListSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksListSecurity };
var AnalyticsadminPropertiesSearchAds360LinksListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksListRequest, _super);
    function AnalyticsadminPropertiesSearchAds360LinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesSearchAds360LinksListPathParams)
    ], AnalyticsadminPropertiesSearchAds360LinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesSearchAds360LinksListQueryParams)
    ], AnalyticsadminPropertiesSearchAds360LinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesSearchAds360LinksListSecurity)
    ], AnalyticsadminPropertiesSearchAds360LinksListRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksListRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksListRequest };
var AnalyticsadminPropertiesSearchAds360LinksListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksListResponse, _super);
    function AnalyticsadminPropertiesSearchAds360LinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse)
    ], AnalyticsadminPropertiesSearchAds360LinksListResponse.prototype, "googleAnalyticsAdminV1alphaListSearchAds360LinksResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesSearchAds360LinksListResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksListResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksListResponse };
