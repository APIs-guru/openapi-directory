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
var AndroidpublisherMonetizationConvertRegionPricesPathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationConvertRegionPricesPathParams, _super);
    function AndroidpublisherMonetizationConvertRegionPricesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesPathParams.prototype, "packageName", void 0);
    return AndroidpublisherMonetizationConvertRegionPricesPathParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationConvertRegionPricesPathParams };
var AndroidpublisherMonetizationConvertRegionPricesQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationConvertRegionPricesQueryParams, _super);
    function AndroidpublisherMonetizationConvertRegionPricesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherMonetizationConvertRegionPricesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherMonetizationConvertRegionPricesQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationConvertRegionPricesQueryParams };
var AndroidpublisherMonetizationConvertRegionPricesSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationConvertRegionPricesSecurity, _super);
    function AndroidpublisherMonetizationConvertRegionPricesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherMonetizationConvertRegionPricesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherMonetizationConvertRegionPricesSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherMonetizationConvertRegionPricesSecurity;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationConvertRegionPricesSecurity };
var AndroidpublisherMonetizationConvertRegionPricesRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationConvertRegionPricesRequest, _super);
    function AndroidpublisherMonetizationConvertRegionPricesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationConvertRegionPricesPathParams)
    ], AndroidpublisherMonetizationConvertRegionPricesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationConvertRegionPricesQueryParams)
    ], AndroidpublisherMonetizationConvertRegionPricesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConvertRegionPricesRequest)
    ], AndroidpublisherMonetizationConvertRegionPricesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherMonetizationConvertRegionPricesSecurity)
    ], AndroidpublisherMonetizationConvertRegionPricesRequest.prototype, "security", void 0);
    return AndroidpublisherMonetizationConvertRegionPricesRequest;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationConvertRegionPricesRequest };
var AndroidpublisherMonetizationConvertRegionPricesResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherMonetizationConvertRegionPricesResponse, _super);
    function AndroidpublisherMonetizationConvertRegionPricesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherMonetizationConvertRegionPricesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConvertRegionPricesResponse)
    ], AndroidpublisherMonetizationConvertRegionPricesResponse.prototype, "convertRegionPricesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherMonetizationConvertRegionPricesResponse.prototype, "statusCode", void 0);
    return AndroidpublisherMonetizationConvertRegionPricesResponse;
}(SpeakeasyBase));
export { AndroidpublisherMonetizationConvertRegionPricesResponse };
