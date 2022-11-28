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
export var GetPaymentDisputeSummariesServerList = [
    "https://apiz.ebay.com{basePath}",
];
var GetPaymentDisputeSummariesQueryParams = /** @class */ (function (_super) {
    __extends(GetPaymentDisputeSummariesQueryParams, _super);
    function GetPaymentDisputeSummariesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=buyer_username" }),
        __metadata("design:type", String)
    ], GetPaymentDisputeSummariesQueryParams.prototype, "buyerUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], GetPaymentDisputeSummariesQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetPaymentDisputeSummariesQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=open_date_from" }),
        __metadata("design:type", String)
    ], GetPaymentDisputeSummariesQueryParams.prototype, "openDateFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=open_date_to" }),
        __metadata("design:type", String)
    ], GetPaymentDisputeSummariesQueryParams.prototype, "openDateTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_id" }),
        __metadata("design:type", String)
    ], GetPaymentDisputeSummariesQueryParams.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payment_dispute_status" }),
        __metadata("design:type", String)
    ], GetPaymentDisputeSummariesQueryParams.prototype, "paymentDisputeStatus", void 0);
    return GetPaymentDisputeSummariesQueryParams;
}(SpeakeasyBase));
export { GetPaymentDisputeSummariesQueryParams };
var GetPaymentDisputeSummariesSecurity = /** @class */ (function (_super) {
    __extends(GetPaymentDisputeSummariesSecurity, _super);
    function GetPaymentDisputeSummariesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeApiAuth)
    ], GetPaymentDisputeSummariesSecurity.prototype, "apiAuth", void 0);
    return GetPaymentDisputeSummariesSecurity;
}(SpeakeasyBase));
export { GetPaymentDisputeSummariesSecurity };
var GetPaymentDisputeSummariesRequest = /** @class */ (function (_super) {
    __extends(GetPaymentDisputeSummariesRequest, _super);
    function GetPaymentDisputeSummariesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentDisputeSummariesRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentDisputeSummariesQueryParams)
    ], GetPaymentDisputeSummariesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPaymentDisputeSummariesSecurity)
    ], GetPaymentDisputeSummariesRequest.prototype, "security", void 0);
    return GetPaymentDisputeSummariesRequest;
}(SpeakeasyBase));
export { GetPaymentDisputeSummariesRequest };
var GetPaymentDisputeSummariesResponse = /** @class */ (function (_super) {
    __extends(GetPaymentDisputeSummariesResponse, _super);
    function GetPaymentDisputeSummariesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPaymentDisputeSummariesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DisputeSummaryResponse)
    ], GetPaymentDisputeSummariesResponse.prototype, "disputeSummaryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPaymentDisputeSummariesResponse.prototype, "statusCode", void 0);
    return GetPaymentDisputeSummariesResponse;
}(SpeakeasyBase));
export { GetPaymentDisputeSummariesResponse };
