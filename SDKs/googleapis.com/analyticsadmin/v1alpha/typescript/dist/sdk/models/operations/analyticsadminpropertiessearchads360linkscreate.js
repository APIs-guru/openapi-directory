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
var AnalyticsadminPropertiesSearchAds360LinksCreatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksCreatePathParams, _super);
    function AnalyticsadminPropertiesSearchAds360LinksCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreatePathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksCreatePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksCreatePathParams };
var AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams, _super);
    function AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams };
var AnalyticsadminPropertiesSearchAds360LinksCreateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksCreateSecurity, _super);
    function AnalyticsadminPropertiesSearchAds360LinksCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksCreateSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksCreateSecurity };
var AnalyticsadminPropertiesSearchAds360LinksCreateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksCreateRequest, _super);
    function AnalyticsadminPropertiesSearchAds360LinksCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesSearchAds360LinksCreatePathParams)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaSearchAds360LinkInput)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesSearchAds360LinksCreateSecurity)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksCreateRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksCreateRequest };
var AnalyticsadminPropertiesSearchAds360LinksCreateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesSearchAds360LinksCreateResponse, _super);
    function AnalyticsadminPropertiesSearchAds360LinksCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaSearchAds360Link)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateResponse.prototype, "googleAnalyticsAdminV1alphaSearchAds360Link", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesSearchAds360LinksCreateResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesSearchAds360LinksCreateResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesSearchAds360LinksCreateResponse };
