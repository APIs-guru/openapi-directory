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
var AnalyticsadminAccountsProvisionAccountTicketQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountsProvisionAccountTicketQueryParams, _super);
    function AnalyticsadminAccountsProvisionAccountTicketQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsProvisionAccountTicketQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsProvisionAccountTicketQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsProvisionAccountTicketQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsProvisionAccountTicketQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsProvisionAccountTicketQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsProvisionAccountTicketQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsProvisionAccountTicketQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsadminAccountsProvisionAccountTicketQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsProvisionAccountTicketQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsProvisionAccountTicketQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsProvisionAccountTicketQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsadminAccountsProvisionAccountTicketQueryParams;
}(SpeakeasyBase));
export { AnalyticsadminAccountsProvisionAccountTicketQueryParams };
var AnalyticsadminAccountsProvisionAccountTicketSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountsProvisionAccountTicketSecurity, _super);
    function AnalyticsadminAccountsProvisionAccountTicketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsadminAccountsProvisionAccountTicketSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsadminAccountsProvisionAccountTicketSecurity.prototype, "oauth2c", void 0);
    return AnalyticsadminAccountsProvisionAccountTicketSecurity;
}(SpeakeasyBase));
export { AnalyticsadminAccountsProvisionAccountTicketSecurity };
var AnalyticsadminAccountsProvisionAccountTicketRequest = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountsProvisionAccountTicketRequest, _super);
    function AnalyticsadminAccountsProvisionAccountTicketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminAccountsProvisionAccountTicketQueryParams)
    ], AnalyticsadminAccountsProvisionAccountTicketRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequestInput)
    ], AnalyticsadminAccountsProvisionAccountTicketRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsadminAccountsProvisionAccountTicketSecurity)
    ], AnalyticsadminAccountsProvisionAccountTicketRequest.prototype, "security", void 0);
    return AnalyticsadminAccountsProvisionAccountTicketRequest;
}(SpeakeasyBase));
export { AnalyticsadminAccountsProvisionAccountTicketRequest };
var AnalyticsadminAccountsProvisionAccountTicketResponse = /** @class */ (function (_super) {
    __extends(AnalyticsadminAccountsProvisionAccountTicketResponse, _super);
    function AnalyticsadminAccountsProvisionAccountTicketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsadminAccountsProvisionAccountTicketResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleAnalyticsAdminV1alphaProvisionAccountTicketResponse)
    ], AnalyticsadminAccountsProvisionAccountTicketResponse.prototype, "googleAnalyticsAdminV1alphaProvisionAccountTicketResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsadminAccountsProvisionAccountTicketResponse.prototype, "statusCode", void 0);
    return AnalyticsadminAccountsProvisionAccountTicketResponse;
}(SpeakeasyBase));
export { AnalyticsadminAccountsProvisionAccountTicketResponse };
