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
var AndroiddeviceprovisioningCustomersConfigurationsDeletePathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsDeletePathParams, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeletePathParams.prototype, "name", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsDeletePathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsDeletePathParams };
var AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams };
var AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningCustomersConfigurationsDeletePathParams)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningCustomersConfigurationsDeleteQueryParams)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest.prototype, "queryParams", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsDeleteRequest };
var AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsDeleteResponse };
