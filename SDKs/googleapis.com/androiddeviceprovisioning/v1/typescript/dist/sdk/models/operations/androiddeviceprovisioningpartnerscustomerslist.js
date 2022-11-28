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
var AndroiddeviceprovisioningPartnersCustomersListPathParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersCustomersListPathParams, _super);
    function AndroiddeviceprovisioningPartnersCustomersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partnerId" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListPathParams.prototype, "partnerId", void 0);
    return AndroiddeviceprovisioningPartnersCustomersListPathParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersCustomersListPathParams };
var AndroiddeviceprovisioningPartnersCustomersListQueryParams = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersCustomersListQueryParams, _super);
    function AndroiddeviceprovisioningPartnersCustomersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListQueryParams.prototype, "uploadProtocol", void 0);
    return AndroiddeviceprovisioningPartnersCustomersListQueryParams;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersCustomersListQueryParams };
var AndroiddeviceprovisioningPartnersCustomersListRequest = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersCustomersListRequest, _super);
    function AndroiddeviceprovisioningPartnersCustomersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersCustomersListPathParams)
    ], AndroiddeviceprovisioningPartnersCustomersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroiddeviceprovisioningPartnersCustomersListQueryParams)
    ], AndroiddeviceprovisioningPartnersCustomersListRequest.prototype, "queryParams", void 0);
    return AndroiddeviceprovisioningPartnersCustomersListRequest;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersCustomersListRequest };
var AndroiddeviceprovisioningPartnersCustomersListResponse = /** @class */ (function (_super) {
    __extends(AndroiddeviceprovisioningPartnersCustomersListResponse, _super);
    function AndroiddeviceprovisioningPartnersCustomersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroiddeviceprovisioningPartnersCustomersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCustomersResponse)
    ], AndroiddeviceprovisioningPartnersCustomersListResponse.prototype, "listCustomersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroiddeviceprovisioningPartnersCustomersListResponse.prototype, "statusCode", void 0);
    return AndroiddeviceprovisioningPartnersCustomersListResponse;
}(SpeakeasyBase));
export { AndroiddeviceprovisioningPartnersCustomersListResponse };
