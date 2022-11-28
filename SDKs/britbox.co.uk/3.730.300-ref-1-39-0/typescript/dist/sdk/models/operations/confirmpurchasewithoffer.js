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
var ConfirmPurchaseWithOfferPathParams = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseWithOfferPathParams, _super);
    function ConfirmPurchaseWithOfferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" }),
        __metadata("design:type", String)
    ], ConfirmPurchaseWithOfferPathParams.prototype, "platform", void 0);
    return ConfirmPurchaseWithOfferPathParams;
}(SpeakeasyBase));
export { ConfirmPurchaseWithOfferPathParams };
var ConfirmPurchaseWithOfferQueryParams = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseWithOfferQueryParams, _super);
    function ConfirmPurchaseWithOfferQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ConfirmPurchaseWithOfferQueryParams.prototype, "lang", void 0);
    return ConfirmPurchaseWithOfferQueryParams;
}(SpeakeasyBase));
export { ConfirmPurchaseWithOfferQueryParams };
var ConfirmPurchaseWithOfferSecurity = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseWithOfferSecurity, _super);
    function ConfirmPurchaseWithOfferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAccountAuth)
    ], ConfirmPurchaseWithOfferSecurity.prototype, "accountAuth", void 0);
    return ConfirmPurchaseWithOfferSecurity;
}(SpeakeasyBase));
export { ConfirmPurchaseWithOfferSecurity };
var ConfirmPurchaseWithOfferRequest = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseWithOfferRequest, _super);
    function ConfirmPurchaseWithOfferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfirmPurchaseWithOfferPathParams)
    ], ConfirmPurchaseWithOfferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfirmPurchaseWithOfferQueryParams)
    ], ConfirmPurchaseWithOfferRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ItvPurchaseWithOfferRequest)
    ], ConfirmPurchaseWithOfferRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ConfirmPurchaseWithOfferSecurity)
    ], ConfirmPurchaseWithOfferRequest.prototype, "security", void 0);
    return ConfirmPurchaseWithOfferRequest;
}(SpeakeasyBase));
export { ConfirmPurchaseWithOfferRequest };
var ConfirmPurchaseWithOfferResponse = /** @class */ (function (_super) {
    __extends(ConfirmPurchaseWithOfferResponse, _super);
    function ConfirmPurchaseWithOfferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ConfirmPurchaseWithOfferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ItvPurchaseWithOfferResponse)
    ], ConfirmPurchaseWithOfferResponse.prototype, "itvPurchaseWithOfferResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceError)
    ], ConfirmPurchaseWithOfferResponse.prototype, "serviceError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ConfirmPurchaseWithOfferResponse.prototype, "statusCode", void 0);
    return ConfirmPurchaseWithOfferResponse;
}(SpeakeasyBase));
export { ConfirmPurchaseWithOfferResponse };
