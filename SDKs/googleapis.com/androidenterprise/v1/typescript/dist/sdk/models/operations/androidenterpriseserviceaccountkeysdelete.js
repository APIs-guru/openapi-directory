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
var AndroidenterpriseServiceaccountkeysDeletePathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysDeletePathParams, _super);
    function AndroidenterpriseServiceaccountkeysDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeletePathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=keyId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeletePathParams.prototype, "keyId", void 0);
    return AndroidenterpriseServiceaccountkeysDeletePathParams;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysDeletePathParams };
var AndroidenterpriseServiceaccountkeysDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysDeleteQueryParams, _super);
    function AndroidenterpriseServiceaccountkeysDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseServiceaccountkeysDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseServiceaccountkeysDeleteQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysDeleteQueryParams };
var AndroidenterpriseServiceaccountkeysDeleteSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysDeleteSecurity, _super);
    function AndroidenterpriseServiceaccountkeysDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseServiceaccountkeysDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseServiceaccountkeysDeleteSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseServiceaccountkeysDeleteSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysDeleteSecurity };
var AndroidenterpriseServiceaccountkeysDeleteRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysDeleteRequest, _super);
    function AndroidenterpriseServiceaccountkeysDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseServiceaccountkeysDeletePathParams)
    ], AndroidenterpriseServiceaccountkeysDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseServiceaccountkeysDeleteQueryParams)
    ], AndroidenterpriseServiceaccountkeysDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseServiceaccountkeysDeleteSecurity)
    ], AndroidenterpriseServiceaccountkeysDeleteRequest.prototype, "security", void 0);
    return AndroidenterpriseServiceaccountkeysDeleteRequest;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysDeleteRequest };
var AndroidenterpriseServiceaccountkeysDeleteResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseServiceaccountkeysDeleteResponse, _super);
    function AndroidenterpriseServiceaccountkeysDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseServiceaccountkeysDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseServiceaccountkeysDeleteResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseServiceaccountkeysDeleteResponse;
}(SpeakeasyBase));
export { AndroidenterpriseServiceaccountkeysDeleteResponse };
