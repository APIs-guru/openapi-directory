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
import { Amount } from "./amount";
// TransactionSummaryResponse
/**
 * This type is the base response type of the getTransactionSummary method, and based on the filters that are used in the getTransactionSummary call URI, the response may include total count and amount of the seller's sales and credits, total count and amount of buyer refunds, and total count and amount of seller payment holds.
**/
var TransactionSummaryResponse = /** @class */ (function (_super) {
    __extends(TransactionSummaryResponse, _super);
    function TransactionSummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adjustmentAmount" }),
        __metadata("design:type", Amount)
    ], TransactionSummaryResponse.prototype, "adjustmentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adjustmentBookingEntry" }),
        __metadata("design:type", String)
    ], TransactionSummaryResponse.prototype, "adjustmentBookingEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adjustmentCount" }),
        __metadata("design:type", Number)
    ], TransactionSummaryResponse.prototype, "adjustmentCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balanceTransferAmount" }),
        __metadata("design:type", Amount)
    ], TransactionSummaryResponse.prototype, "balanceTransferAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balanceTransferBookingEntry" }),
        __metadata("design:type", String)
    ], TransactionSummaryResponse.prototype, "balanceTransferBookingEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balanceTransferCount" }),
        __metadata("design:type", Number)
    ], TransactionSummaryResponse.prototype, "balanceTransferCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditAmount" }),
        __metadata("design:type", Amount)
    ], TransactionSummaryResponse.prototype, "creditAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditBookingEntry" }),
        __metadata("design:type", String)
    ], TransactionSummaryResponse.prototype, "creditBookingEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creditCount" }),
        __metadata("design:type", Number)
    ], TransactionSummaryResponse.prototype, "creditCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disputeAmount" }),
        __metadata("design:type", Amount)
    ], TransactionSummaryResponse.prototype, "disputeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disputeBookingEntry" }),
        __metadata("design:type", String)
    ], TransactionSummaryResponse.prototype, "disputeBookingEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disputeCount" }),
        __metadata("design:type", Number)
    ], TransactionSummaryResponse.prototype, "disputeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonSaleChargeAmount" }),
        __metadata("design:type", Amount)
    ], TransactionSummaryResponse.prototype, "nonSaleChargeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonSaleChargeBookingEntry" }),
        __metadata("design:type", String)
    ], TransactionSummaryResponse.prototype, "nonSaleChargeBookingEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonSaleChargeCount" }),
        __metadata("design:type", Number)
    ], TransactionSummaryResponse.prototype, "nonSaleChargeCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onHoldAmount" }),
        __metadata("design:type", Amount)
    ], TransactionSummaryResponse.prototype, "onHoldAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onHoldBookingEntry" }),
        __metadata("design:type", String)
    ], TransactionSummaryResponse.prototype, "onHoldBookingEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onHoldCount" }),
        __metadata("design:type", Number)
    ], TransactionSummaryResponse.prototype, "onHoldCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refundAmount" }),
        __metadata("design:type", Amount)
    ], TransactionSummaryResponse.prototype, "refundAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refundBookingEntry" }),
        __metadata("design:type", String)
    ], TransactionSummaryResponse.prototype, "refundBookingEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refundCount" }),
        __metadata("design:type", Number)
    ], TransactionSummaryResponse.prototype, "refundCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingLabelAmount" }),
        __metadata("design:type", Amount)
    ], TransactionSummaryResponse.prototype, "shippingLabelAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingLabelBookingEntry" }),
        __metadata("design:type", String)
    ], TransactionSummaryResponse.prototype, "shippingLabelBookingEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shippingLabelCount" }),
        __metadata("design:type", Number)
    ], TransactionSummaryResponse.prototype, "shippingLabelCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferAmount" }),
        __metadata("design:type", Amount)
    ], TransactionSummaryResponse.prototype, "transferAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferBookingEntry" }),
        __metadata("design:type", String)
    ], TransactionSummaryResponse.prototype, "transferBookingEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferCount" }),
        __metadata("design:type", Number)
    ], TransactionSummaryResponse.prototype, "transferCount", void 0);
    return TransactionSummaryResponse;
}(SpeakeasyBase));
export { TransactionSummaryResponse };
