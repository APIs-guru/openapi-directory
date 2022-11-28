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
var AndroidenterpriseGrouplicensesGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicensesGetPathParams, _super);
    function AndroidenterpriseGrouplicensesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetPathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupLicenseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetPathParams.prototype, "groupLicenseId", void 0);
    return AndroidenterpriseGrouplicensesGetPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicensesGetPathParams };
var AndroidenterpriseGrouplicensesGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicensesGetQueryParams, _super);
    function AndroidenterpriseGrouplicensesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseGrouplicensesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseGrouplicensesGetQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicensesGetQueryParams };
var AndroidenterpriseGrouplicensesGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicensesGetSecurity, _super);
    function AndroidenterpriseGrouplicensesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseGrouplicensesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseGrouplicensesGetSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseGrouplicensesGetSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicensesGetSecurity };
var AndroidenterpriseGrouplicensesGetRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicensesGetRequest, _super);
    function AndroidenterpriseGrouplicensesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseGrouplicensesGetPathParams)
    ], AndroidenterpriseGrouplicensesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseGrouplicensesGetQueryParams)
    ], AndroidenterpriseGrouplicensesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseGrouplicensesGetSecurity)
    ], AndroidenterpriseGrouplicensesGetRequest.prototype, "security", void 0);
    return AndroidenterpriseGrouplicensesGetRequest;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicensesGetRequest };
var AndroidenterpriseGrouplicensesGetResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseGrouplicensesGetResponse, _super);
    function AndroidenterpriseGrouplicensesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseGrouplicensesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GroupLicense)
    ], AndroidenterpriseGrouplicensesGetResponse.prototype, "groupLicense", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseGrouplicensesGetResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseGrouplicensesGetResponse;
}(SpeakeasyBase));
export { AndroidenterpriseGrouplicensesGetResponse };
