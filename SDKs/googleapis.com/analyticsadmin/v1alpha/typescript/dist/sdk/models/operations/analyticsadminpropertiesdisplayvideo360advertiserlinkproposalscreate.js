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
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams.prototype, "parent", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreatePathParams)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateQueryParams)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateSecurity)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateRequest };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse.prototype, "googleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsCreateResponse };
