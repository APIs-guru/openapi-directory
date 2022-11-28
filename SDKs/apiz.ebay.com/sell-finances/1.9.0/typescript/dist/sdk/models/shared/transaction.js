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
import { Buyer } from "./buyer";
import { OrderLineItem } from "./orderlineitem";
import { Reference } from "./reference";
// Transaction
/**
 * This type is used to express the details of one of the following monetary transactions: a buyer's payment for an order, a refund to the buyer for a returned item or cancelled order, or a credit issued by eBay to the seller's account.
**/
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Amount)
    ], Transaction.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bookingEntry" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "bookingEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyer" }),
        __metadata("design:type", Buyer)
    ], Transaction.prototype, "buyer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=feeType" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: OrderLineItem }),
        __metadata("design:type", Array)
    ], Transaction.prototype, "orderLineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentsEntity" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "paymentsEntity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payoutId" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "payoutId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=references", elemType: Reference }),
        __metadata("design:type", Array)
    ], Transaction.prototype, "references", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salesRecordReference" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "salesRecordReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalFeeAmount" }),
        __metadata("design:type", Amount)
    ], Transaction.prototype, "totalFeeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalFeeBasisAmount" }),
        __metadata("design:type", Amount)
    ], Transaction.prototype, "totalFeeBasisAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionDate" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "transactionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionId" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "transactionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionMemo" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "transactionMemo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionStatus" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "transactionStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactionType" }),
        __metadata("design:type", String)
    ], Transaction.prototype, "transactionType", void 0);
    return Transaction;
}(SpeakeasyBase));
export { Transaction };
