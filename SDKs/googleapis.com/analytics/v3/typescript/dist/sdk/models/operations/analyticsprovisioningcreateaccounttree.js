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
var AnalyticsProvisioningCreateAccountTreeQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsProvisioningCreateAccountTreeQueryParams, _super);
    function AnalyticsProvisioningCreateAccountTreeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsProvisioningCreateAccountTreeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsProvisioningCreateAccountTreeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsProvisioningCreateAccountTreeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsProvisioningCreateAccountTreeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsProvisioningCreateAccountTreeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsProvisioningCreateAccountTreeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsProvisioningCreateAccountTreeQueryParams.prototype, "userIp", void 0);
    return AnalyticsProvisioningCreateAccountTreeQueryParams;
}(SpeakeasyBase));
export { AnalyticsProvisioningCreateAccountTreeQueryParams };
var AnalyticsProvisioningCreateAccountTreeSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsProvisioningCreateAccountTreeSecurity, _super);
    function AnalyticsProvisioningCreateAccountTreeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsProvisioningCreateAccountTreeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsProvisioningCreateAccountTreeSecurity.prototype, "oauth2c", void 0);
    return AnalyticsProvisioningCreateAccountTreeSecurity;
}(SpeakeasyBase));
export { AnalyticsProvisioningCreateAccountTreeSecurity };
var AnalyticsProvisioningCreateAccountTreeRequest = /** @class */ (function (_super) {
    __extends(AnalyticsProvisioningCreateAccountTreeRequest, _super);
    function AnalyticsProvisioningCreateAccountTreeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsProvisioningCreateAccountTreeQueryParams)
    ], AnalyticsProvisioningCreateAccountTreeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AccountTreeRequest)
    ], AnalyticsProvisioningCreateAccountTreeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsProvisioningCreateAccountTreeSecurity)
    ], AnalyticsProvisioningCreateAccountTreeRequest.prototype, "security", void 0);
    return AnalyticsProvisioningCreateAccountTreeRequest;
}(SpeakeasyBase));
export { AnalyticsProvisioningCreateAccountTreeRequest };
var AnalyticsProvisioningCreateAccountTreeResponse = /** @class */ (function (_super) {
    __extends(AnalyticsProvisioningCreateAccountTreeResponse, _super);
    function AnalyticsProvisioningCreateAccountTreeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AccountTreeResponse)
    ], AnalyticsProvisioningCreateAccountTreeResponse.prototype, "accountTreeResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsProvisioningCreateAccountTreeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsProvisioningCreateAccountTreeResponse.prototype, "statusCode", void 0);
    return AnalyticsProvisioningCreateAccountTreeResponse;
}(SpeakeasyBase));
export { AnalyticsProvisioningCreateAccountTreeResponse };
