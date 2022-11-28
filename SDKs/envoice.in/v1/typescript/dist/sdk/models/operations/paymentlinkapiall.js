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
var PaymentLinkApiAllQueryParams = /** @class */ (function (_super) {
    __extends(PaymentLinkApiAllQueryParams, _super);
    function PaymentLinkApiAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.page" }),
        __metadata("design:type", Number)
    ], PaymentLinkApiAllQueryParams.prototype, "queryOptionsPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=queryOptions.pageSize" }),
        __metadata("design:type", Number)
    ], PaymentLinkApiAllQueryParams.prototype, "queryOptionsPageSize", void 0);
    return PaymentLinkApiAllQueryParams;
}(SpeakeasyBase));
export { PaymentLinkApiAllQueryParams };
var PaymentLinkApiAllHeaders = /** @class */ (function (_super) {
    __extends(PaymentLinkApiAllHeaders, _super);
    function PaymentLinkApiAllHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" }),
        __metadata("design:type", String)
    ], PaymentLinkApiAllHeaders.prototype, "xAuthKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" }),
        __metadata("design:type", String)
    ], PaymentLinkApiAllHeaders.prototype, "xAuthSecret", void 0);
    return PaymentLinkApiAllHeaders;
}(SpeakeasyBase));
export { PaymentLinkApiAllHeaders };
var PaymentLinkApiAllRequest = /** @class */ (function (_super) {
    __extends(PaymentLinkApiAllRequest, _super);
    function PaymentLinkApiAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PaymentLinkApiAllQueryParams)
    ], PaymentLinkApiAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PaymentLinkApiAllHeaders)
    ], PaymentLinkApiAllRequest.prototype, "headers", void 0);
    return PaymentLinkApiAllRequest;
}(SpeakeasyBase));
export { PaymentLinkApiAllRequest };
var PaymentLinkApiAllResponse = /** @class */ (function (_super) {
    __extends(PaymentLinkApiAllResponse, _super);
    function PaymentLinkApiAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PaymentLinkApiAllResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PaymentLinkApiAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListResultPaymentLink)
    ], PaymentLinkApiAllResponse.prototype, "listResultPaymentLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PaymentLinkApiAllResponse.prototype, "statusCode", void 0);
    return PaymentLinkApiAllResponse;
}(SpeakeasyBase));
export { PaymentLinkApiAllResponse };
