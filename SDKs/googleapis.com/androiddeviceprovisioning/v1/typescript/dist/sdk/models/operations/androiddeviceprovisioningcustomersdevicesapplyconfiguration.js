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
var AndroiddeviceprovisioningCustomersDevicesApplyConfigurationPathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersDevicesApplyConfigurationPathParams, _super);
    function AndroiddeviceprovisioningCustomersDevicesApplyConfigurationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationPathParams.prototype, "parent", void 0);
    return AndroiddeviceprovisioningCustomersDevicesApplyConfigurationPathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersDevicesApplyConfigurationPathParams };
var AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams, _super);
    function AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams };
var AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest, _super);
    function AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningCustomersDevicesApplyConfigurationPathParams)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningCustomersDevicesApplyConfigurationQueryParams)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomerApplyConfigurationRequest)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest.prototype, "request", void 0);
    return AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersDevicesApplyConfigurationRequest };
var AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse, _super);
    function AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersDevicesApplyConfigurationResponse };
