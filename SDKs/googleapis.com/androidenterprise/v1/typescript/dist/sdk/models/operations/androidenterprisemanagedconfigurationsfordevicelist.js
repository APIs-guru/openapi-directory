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
var AndroidenterpriseManagedconfigurationsfordeviceListPathParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceListPathParams, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListPathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListPathParams.prototype, "enterpriseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListPathParams.prototype, "userId", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceListPathParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceListPathParams };
var AndroidenterpriseManagedconfigurationsfordeviceListQueryParams = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceListQueryParams, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidenterpriseManagedconfigurationsfordeviceListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceListQueryParams;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceListQueryParams };
var AndroidenterpriseManagedconfigurationsfordeviceListSecurity = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceListSecurity, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidenterpriseManagedconfigurationsfordeviceListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidenterpriseManagedconfigurationsfordeviceListSecurity.prototype, "oauth2c", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceListSecurity;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceListSecurity };
var AndroidenterpriseManagedconfigurationsfordeviceListRequest = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceListRequest, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsfordeviceListPathParams)
    ], AndroidenterpriseManagedconfigurationsfordeviceListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsfordeviceListQueryParams)
    ], AndroidenterpriseManagedconfigurationsfordeviceListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidenterpriseManagedconfigurationsfordeviceListSecurity)
    ], AndroidenterpriseManagedconfigurationsfordeviceListRequest.prototype, "security", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceListRequest;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceListRequest };
var AndroidenterpriseManagedconfigurationsfordeviceListResponse = /** @class */ (function (_super) {
    __extends(AndroidenterpriseManagedconfigurationsfordeviceListResponse, _super);
    function AndroidenterpriseManagedconfigurationsfordeviceListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidenterpriseManagedconfigurationsfordeviceListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedConfigurationsForDeviceListResponse)
    ], AndroidenterpriseManagedconfigurationsfordeviceListResponse.prototype, "managedConfigurationsForDeviceListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidenterpriseManagedconfigurationsfordeviceListResponse.prototype, "statusCode", void 0);
    return AndroidenterpriseManagedconfigurationsfordeviceListResponse;
}(SpeakeasyBase));
export { AndroidenterpriseManagedconfigurationsfordeviceListResponse };
