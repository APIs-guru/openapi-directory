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
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprovePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprovePathParams, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprovePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprovePathParams.prototype, "name", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprovePathParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprovePathParams };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApprovePathParams)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveQueryParams)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveSecurity)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest.prototype, "security", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveRequest };
var AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse, _super);
    function AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse.prototype, "googleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse.prototype, "statusCode", void 0);
    return AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse;
}(SpeakeasyBase));
export { AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsApproveResponse };
