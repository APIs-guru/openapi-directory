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
var AndroiddeviceprovisioningPartnersVendorsCustomersListPathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersVendorsCustomersListPathParams, _super);
    function AndroiddeviceprovisioningPartnersVendorsCustomersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListPathParams.prototype, "parent", void 0);
    return AndroiddeviceprovisioningPartnersVendorsCustomersListPathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersVendorsCustomersListPathParams };
var AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams, _super);
    function AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams };
var AndroiddeviceprovisioningPartnersVendorsCustomersListRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersVendorsCustomersListRequest, _super);
    function AndroiddeviceprovisioningPartnersVendorsCustomersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersVendorsCustomersListPathParams)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersVendorsCustomersListQueryParams)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListRequest.prototype, "queryParams", void 0);
    return AndroiddeviceprovisioningPartnersVendorsCustomersListRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersVendorsCustomersListRequest };
var AndroiddeviceprovisioningPartnersVendorsCustomersListResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersVendorsCustomersListResponse, _super);
    function AndroiddeviceprovisioningPartnersVendorsCustomersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListVendorCustomersResponse)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListResponse.prototype, "listVendorCustomersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningPartnersVendorsCustomersListResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningPartnersVendorsCustomersListResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersVendorsCustomersListResponse };
