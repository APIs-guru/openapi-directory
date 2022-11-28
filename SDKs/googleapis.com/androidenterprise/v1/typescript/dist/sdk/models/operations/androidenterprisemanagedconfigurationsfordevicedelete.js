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
var AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedConfigurationForDeviceId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams.prototype, "managedConfigurationForDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams.prototype, "userId", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams };
var AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams };
var AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity };
var AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest.prototype, "security", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest };
var AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse };
