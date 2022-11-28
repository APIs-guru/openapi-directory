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
var AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsPathParams, _super);
    function AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsPathParams.prototype, "parent", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsPathParams };
var AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams, _super);
    function AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams.prototype, "uploadProtocol", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams };
var AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1, _super);
    function AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1 };
var AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2, _super);
    function AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2 };
var AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity, _super);
    function AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption1)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurityOption2)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity.prototype, "option2", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity };
var AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest, _super);
    function AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsPathParams)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsQueryParams)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsSecurity)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest.prototype, "security", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsRequest };
var AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse, _super);
    function AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLinkedAdUnitsResponse)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse.prototype, "listLinkedAdUnitsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse;
}(SpeakeasyBase));
export { AdsenseAccountsAdclientsCustomchannelsListLinkedAdUnitsResponse };
