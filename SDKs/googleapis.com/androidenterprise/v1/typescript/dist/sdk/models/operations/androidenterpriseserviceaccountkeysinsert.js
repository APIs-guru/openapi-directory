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
var AndroidenterpriseServiceaccountkeysInsertPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysInsertPathParams, _super);
    function AndroidenterpriseServiceaccountkeysInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertPathParams.prototype, "enterpriseId", void 0);
    return AndroidenterpriseServiceaccountkeysInsertPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysInsertPathParams };
var AndroidenterpriseServiceaccountkeysInsertQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysInsertQueryParams, _super);
    function AndroidenterpriseServiceaccountkeysInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseServiceaccountkeysInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseServiceaccountkeysInsertQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysInsertQueryParams };
var AndroidenterpriseServiceaccountkeysInsertSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysInsertSecurity, _super);
    function AndroidenterpriseServiceaccountkeysInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseServiceaccountkeysInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseServiceaccountkeysInsertSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseServiceaccountkeysInsertSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysInsertSecurity };
var AndroidenterpriseServiceaccountkeysInsertRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysInsertRequest, _super);
    function AndroidenterpriseServiceaccountkeysInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseServiceaccountkeysInsertPathParams)
    ], AndroidenterpriseServiceaccountkeysInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseServiceaccountkeysInsertQueryParams)
    ], AndroidenterpriseServiceaccountkeysInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ServiceAccountKey)
    ], AndroidenterpriseServiceaccountkeysInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseServiceaccountkeysInsertSecurity)
    ], AndroidenterpriseServiceaccountkeysInsertRequest.prototype, "security", void 0);
    return AndroidenterpriseServiceaccountkeysInsertRequest;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysInsertRequest };
var AndroidenterpriseServiceaccountkeysInsertResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysInsertResponse, _super);
    function AndroidenterpriseServiceaccountkeysInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceAccountKey)
    ], AndroidenterpriseServiceaccountkeysInsertResponse.prototype, "serviceAccountKey", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseServiceaccountkeysInsertResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseServiceaccountkeysInsertResponse;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysInsertResponse };
