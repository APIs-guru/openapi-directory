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
var AndroidenterpriseManagedconfigurationsforuserUpdatePathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserUpdatePathParams, _super);
    function AndroidenterpriseManagedconfigurationsforuserUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdatePathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedConfigurationForUserId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdatePathParams.prototype, "managedConfigurationForUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdatePathParams.prototype, "userId", void 0);
    return AndroidenterpriseManagedconfigurationsforuserUpdatePathParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserUpdatePathParams };
var AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams, _super);
    function AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams };
var AndroidenterpriseManagedconfigurationsforuserUpdateSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserUpdateSecurity, _super);
    function AndroidenterpriseManagedconfigurationsforuserUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseManagedconfigurationsforuserUpdateSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserUpdateSecurity };
var AndroidenterpriseManagedconfigurationsforuserUpdateRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserUpdateRequest, _super);
    function AndroidenterpriseManagedconfigurationsforuserUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsforuserUpdatePathParams)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ManagedConfiguration)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsforuserUpdateSecurity)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateRequest.prototype, "security", void 0);
    return AndroidenterpriseManagedconfigurationsforuserUpdateRequest;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserUpdateRequest };
var AndroidenterpriseManagedconfigurationsforuserUpdateResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsforuserUpdateResponse, _super);
    function AndroidenterpriseManagedconfigurationsforuserUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedConfiguration)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateResponse.prototype, "managedConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseManagedconfigurationsforuserUpdateResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseManagedconfigurationsforuserUpdateResponse;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsforuserUpdateResponse };
