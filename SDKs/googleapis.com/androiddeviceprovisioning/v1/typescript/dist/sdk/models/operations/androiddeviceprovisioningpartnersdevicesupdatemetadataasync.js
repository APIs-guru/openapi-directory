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
var AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncPathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncPathParams, _super);
    function AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncPathParams.prototype, "partnerId", void 0);
    return AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncPathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncPathParams };
var AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams, _super);
    function AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams };
var AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest, _super);
    function AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncPathParams)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncQueryParams)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateDeviceMetadataInBatchRequest)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest.prototype, "request", void 0);
    return AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest };
var AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse, _super);
    function AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncResponse };
