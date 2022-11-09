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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AndroiddeviceprovisioningPartnersDevicesClaimPathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesClaimPathParams, _super);
    function AndroiddeviceprovisioningPartnersDevicesClaimPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimPathParams.prototype, "partnerId", void 0);
    return AndroiddeviceprovisioningPartnersDevicesClaimPathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesClaimPathParams };
var AndroiddeviceprovisioningPartnersDevicesClaimQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesClaimQueryParams, _super);
    function AndroiddeviceprovisioningPartnersDevicesClaimQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningPartnersDevicesClaimQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningPartnersDevicesClaimQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesClaimQueryParams };
var AndroiddeviceprovisioningPartnersDevicesClaimRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesClaimRequest, _super);
    function AndroiddeviceprovisioningPartnersDevicesClaimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersDevicesClaimPathParams)
    ], AndroiddeviceprovisioningPartnersDevicesClaimRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersDevicesClaimQueryParams)
    ], AndroiddeviceprovisioningPartnersDevicesClaimRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ClaimDeviceRequest)
    ], AndroiddeviceprovisioningPartnersDevicesClaimRequest.prototype, "request", void 0);
    return AndroiddeviceprovisioningPartnersDevicesClaimRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesClaimRequest };
var AndroiddeviceprovisioningPartnersDevicesClaimResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesClaimResponse, _super);
    function AndroiddeviceprovisioningPartnersDevicesClaimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ClaimDeviceResponse)
    ], AndroiddeviceprovisioningPartnersDevicesClaimResponse.prototype, "claimDeviceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesClaimResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningPartnersDevicesClaimResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningPartnersDevicesClaimResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesClaimResponse };
