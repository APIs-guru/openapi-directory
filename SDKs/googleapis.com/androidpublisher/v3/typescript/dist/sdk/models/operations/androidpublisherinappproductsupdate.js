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
var AndroidpublisherInappproductsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherInappproductsUpdatePathParams, _super);
    function AndroidpublisherInappproductsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=packageName" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdatePathParams.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sku" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdatePathParams.prototype, "sku", void 0);
    return AndroidpublisherInappproductsUpdatePathParams;
}(SpeakeasyBase));
export { AndroidpublisherInappproductsUpdatePathParams };
var AndroidpublisherInappproductsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AndroidpublisherInappproductsUpdateQueryParams, _super);
    function AndroidpublisherInappproductsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowMissing" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "allowMissing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoConvertMissingPrices" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "autoConvertMissingPrices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return AndroidpublisherInappproductsUpdateQueryParams;
}(SpeakeasyBase));
export { AndroidpublisherInappproductsUpdateQueryParams };
var AndroidpublisherInappproductsUpdateSecurity = /** @class */ (function (_super) {
    __extends(AndroidpublisherInappproductsUpdateSecurity, _super);
    function AndroidpublisherInappproductsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AndroidpublisherInappproductsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AndroidpublisherInappproductsUpdateSecurity.prototype, "oauth2c", void 0);
    return AndroidpublisherInappproductsUpdateSecurity;
}(SpeakeasyBase));
export { AndroidpublisherInappproductsUpdateSecurity };
var AndroidpublisherInappproductsUpdateRequest = /** @class */ (function (_super) {
    __extends(AndroidpublisherInappproductsUpdateRequest, _super);
    function AndroidpublisherInappproductsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherInappproductsUpdatePathParams)
    ], AndroidpublisherInappproductsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherInappproductsUpdateQueryParams)
    ], AndroidpublisherInappproductsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InAppProduct)
    ], AndroidpublisherInappproductsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AndroidpublisherInappproductsUpdateSecurity)
    ], AndroidpublisherInappproductsUpdateRequest.prototype, "security", void 0);
    return AndroidpublisherInappproductsUpdateRequest;
}(SpeakeasyBase));
export { AndroidpublisherInappproductsUpdateRequest };
var AndroidpublisherInappproductsUpdateResponse = /** @class */ (function (_super) {
    __extends(AndroidpublisherInappproductsUpdateResponse, _super);
    function AndroidpublisherInappproductsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AndroidpublisherInappproductsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InAppProduct)
    ], AndroidpublisherInappproductsUpdateResponse.prototype, "inAppProduct", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AndroidpublisherInappproductsUpdateResponse.prototype, "statusCode", void 0);
    return AndroidpublisherInappproductsUpdateResponse;
}(SpeakeasyBase));
export { AndroidpublisherInappproductsUpdateResponse };
