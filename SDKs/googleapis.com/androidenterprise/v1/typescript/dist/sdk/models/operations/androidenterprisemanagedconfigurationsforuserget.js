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
var AndroidenterpriseManagedconfigurationsforuserGetPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserGetPathParams, _super);
    function AndroidenterpriseManagedconfigurationsforuserGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetPathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedConfigurationForUserId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetPathParams.prototype, "managedConfigurationForUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetPathParams.prototype, "userId", void 0);
    return AndroidenterpriseManagedconfigurationsforuserGetPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserGetPathParams };
var AndroidenterpriseManagedconfigurationsforuserGetQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserGetQueryParams, _super);
    function AndroidenterpriseManagedconfigurationsforuserGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseManagedconfigurationsforuserGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseManagedconfigurationsforuserGetQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserGetQueryParams };
var AndroidenterpriseManagedconfigurationsforuserGetSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserGetSecurity, _super);
    function AndroidenterpriseManagedconfigurationsforuserGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseManagedconfigurationsforuserGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseManagedconfigurationsforuserGetSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseManagedconfigurationsforuserGetSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserGetSecurity };
var AndroidenterpriseManagedconfigurationsforuserGetRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserGetRequest, _super);
    function AndroidenterpriseManagedconfigurationsforuserGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsforuserGetPathParams)
    ], AndroidenterpriseManagedconfigurationsforuserGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsforuserGetQueryParams)
    ], AndroidenterpriseManagedconfigurationsforuserGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsforuserGetSecurity)
    ], AndroidenterpriseManagedconfigurationsforuserGetRequest.prototype, "security", void 0);
    return AndroidenterpriseManagedconfigurationsforuserGetRequest;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserGetRequest };
var AndroidenterpriseManagedconfigurationsforuserGetResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserGetResponse, _super);
    function AndroidenterpriseManagedconfigurationsforuserGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedConfiguration)
    ], AndroidenterpriseManagedconfigurationsforuserGetResponse.prototype, "managedConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseManagedconfigurationsforuserGetResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseManagedconfigurationsforuserGetResponse;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserGetResponse };
