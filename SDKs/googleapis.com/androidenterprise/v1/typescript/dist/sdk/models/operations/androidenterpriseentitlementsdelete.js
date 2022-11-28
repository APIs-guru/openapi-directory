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
var AndroidenterpriseEntitlementsDeletePathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEntitlementsDeletePathParams, _super);
    function AndroidenterpriseEntitlementsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeletePathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=entitlementId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeletePathParams.prototype, "entitlementId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeletePathParams.prototype, "userId", void 0);
    return AndroidenterpriseEntitlementsDeletePathParams;
}(SpeakeasyBase));
export { AndroidenterpriseEntitlementsDeletePathParams };
var AndroidenterpriseEntitlementsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEntitlementsDeleteQueryParams, _super);
    function AndroidenterpriseEntitlementsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseEntitlementsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseEntitlementsDeleteQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseEntitlementsDeleteQueryParams };
var AndroidenterpriseEntitlementsDeleteSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEntitlementsDeleteSecurity, _super);
    function AndroidenterpriseEntitlementsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseEntitlementsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseEntitlementsDeleteSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseEntitlementsDeleteSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseEntitlementsDeleteSecurity };
var AndroidenterpriseEntitlementsDeleteRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEntitlementsDeleteRequest, _super);
    function AndroidenterpriseEntitlementsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEntitlementsDeletePathParams)
    ], AndroidenterpriseEntitlementsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEntitlementsDeleteQueryParams)
    ], AndroidenterpriseEntitlementsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseEntitlementsDeleteSecurity)
    ], AndroidenterpriseEntitlementsDeleteRequest.prototype, "security", void 0);
    return AndroidenterpriseEntitlementsDeleteRequest;
}(SpeakeasyBase));
export { AndroidenterpriseEntitlementsDeleteRequest };
var AndroidenterpriseEntitlementsDeleteResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseEntitlementsDeleteResponse, _super);
    function AndroidenterpriseEntitlementsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseEntitlementsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseEntitlementsDeleteResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseEntitlementsDeleteResponse;
}(SpeakeasyBase));
export { AndroidenterpriseEntitlementsDeleteResponse };
