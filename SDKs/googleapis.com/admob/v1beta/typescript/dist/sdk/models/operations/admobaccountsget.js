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
var AdmobAccountsGetPathParams = /** @class */ (function (_super) {
    __extends(AdmobAccountsGetPathParams, _super);
    function AdmobAccountsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AdmobAccountsGetPathParams.prototype, "name", void 0);
    return AdmobAccountsGetPathParams;
}(SpeakeasyBase));
export { AdmobAccountsGetPathParams };
var AdmobAccountsGetQueryParams = /** @class */ (function (_super) {
    __extends(AdmobAccountsGetQueryParams, _super);
    function AdmobAccountsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdmobAccountsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdmobAccountsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdmobAccountsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdmobAccountsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdmobAccountsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdmobAccountsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdmobAccountsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdmobAccountsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdmobAccountsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdmobAccountsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdmobAccountsGetQueryParams.prototype, "uploadProtocol", void 0);
    return AdmobAccountsGetQueryParams;
}(SpeakeasyBase));
export { AdmobAccountsGetQueryParams };
var AdmobAccountsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdmobAccountsGetSecurityOption1, _super);
    function AdmobAccountsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdmobAccountsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdmobAccountsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AdmobAccountsGetSecurityOption1;
}(SpeakeasyBase));
export { AdmobAccountsGetSecurityOption1 };
var AdmobAccountsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdmobAccountsGetSecurityOption2, _super);
    function AdmobAccountsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdmobAccountsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdmobAccountsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AdmobAccountsGetSecurityOption2;
}(SpeakeasyBase));
export { AdmobAccountsGetSecurityOption2 };
var AdmobAccountsGetSecurity = /** @class */ (function (_super) {
    __extends(AdmobAccountsGetSecurity, _super);
    function AdmobAccountsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdmobAccountsGetSecurityOption1)
    ], AdmobAccountsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdmobAccountsGetSecurityOption2)
    ], AdmobAccountsGetSecurity.prototype, "option2", void 0);
    return AdmobAccountsGetSecurity;
}(SpeakeasyBase));
export { AdmobAccountsGetSecurity };
var AdmobAccountsGetRequest = /** @class */ (function (_super) {
    __extends(AdmobAccountsGetRequest, _super);
    function AdmobAccountsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdmobAccountsGetPathParams)
    ], AdmobAccountsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdmobAccountsGetQueryParams)
    ], AdmobAccountsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdmobAccountsGetSecurity)
    ], AdmobAccountsGetRequest.prototype, "security", void 0);
    return AdmobAccountsGetRequest;
}(SpeakeasyBase));
export { AdmobAccountsGetRequest };
var AdmobAccountsGetResponse = /** @class */ (function (_super) {
    __extends(AdmobAccountsGetResponse, _super);
    function AdmobAccountsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdmobAccountsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PublisherAccount)
    ], AdmobAccountsGetResponse.prototype, "publisherAccount", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdmobAccountsGetResponse.prototype, "statusCode", void 0);
    return AdmobAccountsGetResponse;
}(SpeakeasyBase));
export { AdmobAccountsGetResponse };
