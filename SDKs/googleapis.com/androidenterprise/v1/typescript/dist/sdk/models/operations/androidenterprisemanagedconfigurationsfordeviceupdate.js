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
var AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedConfigurationForDeviceId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams.prototype, "managedConfigurationForDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams.prototype, "userId", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams };
var AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams };
var AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity };
var AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ManagedConfiguration)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest.prototype, "security", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest };
var AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedConfiguration)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse.prototype, "managedConfiguration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse };
