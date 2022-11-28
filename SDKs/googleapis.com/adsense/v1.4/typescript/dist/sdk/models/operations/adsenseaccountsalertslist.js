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
var AdsenseAccountsAlertsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsListPathParams, _super);
    function AdsenseAccountsAlertsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsListPathParams.prototype, "accountId", void 0);
    return AdsenseAccountsAlertsListPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsListPathParams };
var AdsenseAccountsAlertsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsListQueryParams, _super);
    function AdsenseAccountsAlertsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsListQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAlertsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsListQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsAlertsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsListQueryParams };
var AdsenseAccountsAlertsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsListSecurityOption1, _super);
    function AdsenseAccountsAlertsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAlertsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAlertsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsAlertsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsListSecurityOption1 };
var AdsenseAccountsAlertsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsListSecurityOption2, _super);
    function AdsenseAccountsAlertsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAlertsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAlertsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsAlertsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsListSecurityOption2 };
var AdsenseAccountsAlertsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsListSecurity, _super);
    function AdsenseAccountsAlertsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAlertsListSecurityOption1)
    ], AdsenseAccountsAlertsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAlertsListSecurityOption2)
    ], AdsenseAccountsAlertsListSecurity.prototype, "option2", void 0);
    return AdsenseAccountsAlertsListSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsListSecurity };
var AdsenseAccountsAlertsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsListRequest, _super);
    function AdsenseAccountsAlertsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAlertsListPathParams)
    ], AdsenseAccountsAlertsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAlertsListQueryParams)
    ], AdsenseAccountsAlertsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAlertsListSecurity)
    ], AdsenseAccountsAlertsListRequest.prototype, "security", void 0);
    return AdsenseAccountsAlertsListRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsListRequest };
var AdsenseAccountsAlertsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsListResponse, _super);
    function AdsenseAccountsAlertsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Alerts)
    ], AdsenseAccountsAlertsListResponse.prototype, "alerts", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAlertsListResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAlertsListResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsListResponse };
