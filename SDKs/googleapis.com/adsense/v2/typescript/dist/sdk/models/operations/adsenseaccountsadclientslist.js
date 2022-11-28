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
var AdsenseAccountsAdclientsListPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsListPathParams, _super);
    function AdsenseAccountsAdclientsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListPathParams.prototype, "parent", void 0);
    return AdsenseAccountsAdclientsListPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsListPathParams };
var AdsenseAccountsAdclientsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsListQueryParams, _super);
    function AdsenseAccountsAdclientsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListQueryParams.prototype, "uploadProtocol", void 0);
    return AdsenseAccountsAdclientsListQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsListQueryParams };
var AdsenseAccountsAdclientsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsListSecurityOption1, _super);
    function AdsenseAccountsAdclientsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsListSecurityOption1 };
var AdsenseAccountsAdclientsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsListSecurityOption2, _super);
    function AdsenseAccountsAdclientsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsListSecurityOption2 };
var AdsenseAccountsAdclientsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsListSecurity, _super);
    function AdsenseAccountsAdclientsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsListSecurityOption1)
    ], AdsenseAccountsAdclientsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsListSecurityOption2)
    ], AdsenseAccountsAdclientsListSecurity.prototype, "option2", void 0);
    return AdsenseAccountsAdclientsListSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsListSecurity };
var AdsenseAccountsAdclientsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsListRequest, _super);
    function AdsenseAccountsAdclientsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsListPathParams)
    ], AdsenseAccountsAdclientsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsListQueryParams)
    ], AdsenseAccountsAdclientsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsListSecurity)
    ], AdsenseAccountsAdclientsListRequest.prototype, "security", void 0);
    return AdsenseAccountsAdclientsListRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsListRequest };
var AdsenseAccountsAdclientsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsListResponse, _super);
    function AdsenseAccountsAdclientsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAdClientsResponse)
    ], AdsenseAccountsAdclientsListResponse.prototype, "listAdClientsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsListResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAdclientsListResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsListResponse };
