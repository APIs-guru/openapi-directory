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
var AdsenseAccountsAlertsDeletePathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsDeletePathParams, _super);
    function AdsenseAccountsAlertsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsDeletePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsDeletePathParams.prototype, "alertId", void 0);
    return AdsenseAccountsAlertsDeletePathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsDeletePathParams };
var AdsenseAccountsAlertsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsDeleteQueryParams, _super);
    function AdsenseAccountsAlertsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAlertsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsDeleteQueryParams.prototype, "userIp", void 0);
    return AdsenseAccountsAlertsDeleteQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsDeleteQueryParams };
var AdsenseAccountsAlertsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsDeleteSecurity, _super);
    function AdsenseAccountsAlertsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAlertsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAlertsDeleteSecurity.prototype, "oauth2c", void 0);
    return AdsenseAccountsAlertsDeleteSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsDeleteSecurity };
var AdsenseAccountsAlertsDeleteRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsDeleteRequest, _super);
    function AdsenseAccountsAlertsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAlertsDeletePathParams)
    ], AdsenseAccountsAlertsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAlertsDeleteQueryParams)
    ], AdsenseAccountsAlertsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAlertsDeleteSecurity)
    ], AdsenseAccountsAlertsDeleteRequest.prototype, "security", void 0);
    return AdsenseAccountsAlertsDeleteRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsDeleteRequest };
var AdsenseAccountsAlertsDeleteResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAlertsDeleteResponse, _super);
    function AdsenseAccountsAlertsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAlertsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAlertsDeleteResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAlertsDeleteResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAlertsDeleteResponse };
