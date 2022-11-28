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
var AndroiddeviceprovisioningPartnersDevicesMetadataPathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesMetadataPathParams, _super);
    function AndroiddeviceprovisioningPartnersDevicesMetadataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataPathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metadataOwnerId" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataPathParams.prototype, "metadataOwnerId", void 0);
    return AndroiddeviceprovisioningPartnersDevicesMetadataPathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesMetadataPathParams };
var AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams, _super);
    function AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams };
var AndroiddeviceprovisioningPartnersDevicesMetadataRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesMetadataRequest, _super);
    function AndroiddeviceprovisioningPartnersDevicesMetadataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersDevicesMetadataPathParams)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersDevicesMetadataQueryParams)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateDeviceMetadataRequest)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataRequest.prototype, "request", void 0);
    return AndroiddeviceprovisioningPartnersDevicesMetadataRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesMetadataRequest };
var AndroiddeviceprovisioningPartnersDevicesMetadataResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesMetadataResponse, _super);
    function AndroiddeviceprovisioningPartnersDevicesMetadataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeviceMetadata)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataResponse.prototype, "deviceMetadata", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningPartnersDevicesMetadataResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningPartnersDevicesMetadataResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesMetadataResponse };
