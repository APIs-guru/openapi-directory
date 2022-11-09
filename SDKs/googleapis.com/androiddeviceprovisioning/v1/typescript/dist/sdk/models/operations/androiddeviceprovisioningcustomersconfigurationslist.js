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
var AndroiddeviceprovisioningCustomersConfigurationsListPathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsListPathParams, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListPathParams.prototype, "parent", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsListPathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsListPathParams };
var AndroiddeviceprovisioningCustomersConfigurationsListQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsListQueryParams, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningCustomersConfigurationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsListQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsListQueryParams };
var AndroiddeviceprovisioningCustomersConfigurationsListRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsListRequest, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningCustomersConfigurationsListPathParams)
    ], AndroiddeviceprovisioningCustomersConfigurationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AndroiddeviceprovisioningCustomersConfigurationsListQueryParams)
    ], AndroiddeviceprovisioningCustomersConfigurationsListRequest.prototype, "queryParams", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsListRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsListRequest };
var AndroiddeviceprovisioningCustomersConfigurationsListResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningCustomersConfigurationsListResponse, _super);
    function AndroiddeviceprovisioningCustomersConfigurationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningCustomersConfigurationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.CustomerListConfigurationsResponse)
    ], AndroiddeviceprovisioningCustomersConfigurationsListResponse.prototype, "customerListConfigurationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningCustomersConfigurationsListResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningCustomersConfigurationsListResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningCustomersConfigurationsListResponse };
