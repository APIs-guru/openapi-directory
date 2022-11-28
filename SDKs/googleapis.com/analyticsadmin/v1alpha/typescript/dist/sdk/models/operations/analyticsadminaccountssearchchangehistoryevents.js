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
var AnalyticsadminAccountsSearchChangeHistoryEventsPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountsSearchChangeHistoryEventsPathParams, _super);
    function AnalyticsadminAccountsSearchChangeHistoryEventsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsPathParams.prototype, "account", void 0);
    return AnalyticsadminAccountsSearchChangeHistoryEventsPathParams;
}(SpeakeasyBase));
export { AnalyticsadminAccountsSearchChangeHistoryEventsPathParams };
var AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams, _super);
    function AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams };
var AnalyticsadminAccountsSearchChangeHistoryEventsSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountsSearchChangeHistoryEventsSecurity, _super);
    function AnalyticsadminAccountsSearchChangeHistoryEventsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminAccountsSearchChangeHistoryEventsSecurity;
}(SpeakeasyBase));
export { AnalyticsadminAccountsSearchChangeHistoryEventsSecurity };
var AnalyticsadminAccountsSearchChangeHistoryEventsRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountsSearchChangeHistoryEventsRequest, _super);
    function AnalyticsadminAccountsSearchChangeHistoryEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminAccountsSearchChangeHistoryEventsPathParams)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminAccountsSearchChangeHistoryEventsQueryParams)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsRequest)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminAccountsSearchChangeHistoryEventsSecurity)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsRequest.prototype, "security", void 0);
    return AnalyticsadminAccountsSearchChangeHistoryEventsRequest;
}(SpeakeasyBase));
export { AnalyticsadminAccountsSearchChangeHistoryEventsRequest };
var AnalyticsadminAccountsSearchChangeHistoryEventsResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountsSearchChangeHistoryEventsResponse, _super);
    function AnalyticsadminAccountsSearchChangeHistoryEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsResponse.prototype, "googleAnalyticsAdminV1alphaSearchChangeHistoryEventsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminAccountsSearchChangeHistoryEventsResponse.prototype, "statusCode", void 0);
    return AnalyticsadminAccountsSearchChangeHistoryEventsResponse;
}(SpeakeasyBase));
export { AnalyticsadminAccountsSearchChangeHistoryEventsResponse };
