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
var AndroiddeviceprovisioningCustomersConfigurationsPatchPathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsPatchPathParams, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchPathParams.prototype, "name", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsPatchPathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsPatchPathParams };
var AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams };
var AndroiddeviceprovisioningCustomersConfigurationsPatchRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsPatchRequest, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningCustomersConfigurationsPatchPathParams)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningCustomersConfigurationsPatchQueryParams)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConfigurationInput)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchRequest.prototype, "request", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsPatchRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsPatchRequest };
var AndroiddeviceprovisioningCustomersConfigurationsPatchResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsPatchResponse, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Configuration)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchResponse.prototype, "configuration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningCustomersConfigurationsPatchResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsPatchResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsPatchResponse };
