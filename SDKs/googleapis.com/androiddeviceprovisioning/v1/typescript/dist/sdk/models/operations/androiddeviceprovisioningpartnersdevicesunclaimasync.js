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
var AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams, _super);
    function AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams.prototype, "partnerId", void 0);
    return AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams };
var AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams, _super);
    function AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams };
var AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest, _super);
    function AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncPathParams)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncQueryParams)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UnclaimDevicesRequest)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest.prototype, "request", void 0);
    return AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest };
var AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse, _super);
    function AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncResponse };
