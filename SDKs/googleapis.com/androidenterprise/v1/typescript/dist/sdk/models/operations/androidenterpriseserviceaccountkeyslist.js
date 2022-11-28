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
var AndroidenterpriseServiceaccountkeysListPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysListPathParams, _super);
    function AndroidenterpriseServiceaccountkeysListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListPathParams.prototype, "enterpriseId", void 0);
    return AndroidenterpriseServiceaccountkeysListPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysListPathParams };
var AndroidenterpriseServiceaccountkeysListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysListQueryParams, _super);
    function AndroidenterpriseServiceaccountkeysListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseServiceaccountkeysListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseServiceaccountkeysListQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysListQueryParams };
var AndroidenterpriseServiceaccountkeysListSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysListSecurity, _super);
    function AndroidenterpriseServiceaccountkeysListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseServiceaccountkeysListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseServiceaccountkeysListSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseServiceaccountkeysListSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysListSecurity };
var AndroidenterpriseServiceaccountkeysListRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysListRequest, _super);
    function AndroidenterpriseServiceaccountkeysListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseServiceaccountkeysListPathParams)
    ], AndroidenterpriseServiceaccountkeysListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseServiceaccountkeysListQueryParams)
    ], AndroidenterpriseServiceaccountkeysListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseServiceaccountkeysListSecurity)
    ], AndroidenterpriseServiceaccountkeysListRequest.prototype, "security", void 0);
    return AndroidenterpriseServiceaccountkeysListRequest;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysListRequest };
var AndroidenterpriseServiceaccountkeysListResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysListResponse, _super);
    function AndroidenterpriseServiceaccountkeysListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceAccountKeysListResponse)
    ], AndroidenterpriseServiceaccountkeysListResponse.prototype, "serviceAccountKeysListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseServiceaccountkeysListResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseServiceaccountkeysListResponse;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysListResponse };
