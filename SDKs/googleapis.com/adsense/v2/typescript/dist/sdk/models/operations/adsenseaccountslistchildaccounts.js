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
var AdsenseAccountsListChildAccountsPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsListChildAccountsPathParams, _super);
    function AdsenseAccountsListChildAccountsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsPathParams.prototype, "parent", void 0);
    return AdsenseAccountsListChildAccountsPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsListChildAccountsPathParams };
var AdsenseAccountsListChildAccountsQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsListChildAccountsQueryParams, _super);
    function AdsenseAccountsListChildAccountsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsQueryParams.prototype, "uploadProtocol", void 0);
    return AdsenseAccountsListChildAccountsQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsListChildAccountsQueryParams };
var AdsenseAccountsListChildAccountsSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsListChildAccountsSecurityOption1, _super);
    function AdsenseAccountsListChildAccountsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsListChildAccountsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsListChildAccountsSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsListChildAccountsSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsListChildAccountsSecurityOption1 };
var AdsenseAccountsListChildAccountsSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsListChildAccountsSecurityOption2, _super);
    function AdsenseAccountsListChildAccountsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsListChildAccountsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsListChildAccountsSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsListChildAccountsSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsListChildAccountsSecurityOption2 };
var AdsenseAccountsListChildAccountsSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsListChildAccountsSecurity, _super);
    function AdsenseAccountsListChildAccountsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsListChildAccountsSecurityOption1)
    ], AdsenseAccountsListChildAccountsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsListChildAccountsSecurityOption2)
    ], AdsenseAccountsListChildAccountsSecurity.prototype, "option2", void 0);
    return AdsenseAccountsListChildAccountsSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsListChildAccountsSecurity };
var AdsenseAccountsListChildAccountsRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsListChildAccountsRequest, _super);
    function AdsenseAccountsListChildAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsListChildAccountsPathParams)
    ], AdsenseAccountsListChildAccountsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsListChildAccountsQueryParams)
    ], AdsenseAccountsListChildAccountsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsListChildAccountsSecurity)
    ], AdsenseAccountsListChildAccountsRequest.prototype, "security", void 0);
    return AdsenseAccountsListChildAccountsRequest;
}(SpeakeasyBase));
export { AdsenseAccountsListChildAccountsRequest };
var AdsenseAccountsListChildAccountsResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsListChildAccountsResponse, _super);
    function AdsenseAccountsListChildAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsListChildAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListChildAccountsResponse)
    ], AdsenseAccountsListChildAccountsResponse.prototype, "listChildAccountsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsListChildAccountsResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsListChildAccountsResponse;
}(SpeakeasyBase));
export { AdsenseAccountsListChildAccountsResponse };
