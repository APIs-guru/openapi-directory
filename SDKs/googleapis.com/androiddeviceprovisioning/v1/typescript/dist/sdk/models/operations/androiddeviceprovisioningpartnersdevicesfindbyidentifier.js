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
var AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams, _super);
    function AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams.prototype, "partnerId", void 0);
    return AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams };
var AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams, _super);
    function AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams };
var AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest, _super);
    function AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersDevicesFindByIdentifierPathParams)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersDevicesFindByIdentifierQueryParams)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FindDevicesByDeviceIdentifierRequest)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest.prototype, "request", void 0);
    return AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest };
var AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse, _super);
    function AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FindDevicesByDeviceIdentifierResponse)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse.prototype, "findDevicesByDeviceIdentifierResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersDevicesFindByIdentifierResponse };
