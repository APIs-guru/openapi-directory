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
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomerInput } from "./linkedcustomer";
import { LinkedSupplierInput } from "./linkedsupplier";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedCustomer } from "./linkedcustomer";
import { LinkedSupplier } from "./linkedsupplier";
var PaymentAllocationsInput = /** @class */ (function (_super) {
    __extends(PaymentAllocationsInput, _super);
    function PaymentAllocationsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PaymentAllocationsInput.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PaymentAllocationsInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PaymentAllocationsInput.prototype, "type", void 0);
    return PaymentAllocationsInput;
}(SpeakeasyBase));
export { PaymentAllocationsInput };
export var PaymentAllocationsAllocationTypeEnum;
(function (PaymentAllocationsAllocationTypeEnum) {
    PaymentAllocationsAllocationTypeEnum["Invoice"] = "invoice";
    PaymentAllocationsAllocationTypeEnum["Order"] = "order";
    PaymentAllocationsAllocationTypeEnum["Expense"] = "expense";
    PaymentAllocationsAllocationTypeEnum["CreditMemo"] = "credit_memo";
    PaymentAllocationsAllocationTypeEnum["OverPayment"] = "over_payment";
    PaymentAllocationsAllocationTypeEnum["PrePayment"] = "pre_payment";
})(PaymentAllocationsAllocationTypeEnum || (PaymentAllocationsAllocationTypeEnum = {}));
var PaymentAllocations = /** @class */ (function (_super) {
    __extends(PaymentAllocations, _super);
    function PaymentAllocations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], PaymentAllocations.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PaymentAllocations.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PaymentAllocations.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PaymentAllocations.prototype, "type", void 0);
    return PaymentAllocations;
}(SpeakeasyBase));
export { PaymentAllocations };
export var PaymentPaymentStatusEnum;
(function (PaymentPaymentStatusEnum) {
    PaymentPaymentStatusEnum["Authorised"] = "authorised";
    PaymentPaymentStatusEnum["Paid"] = "paid";
    PaymentPaymentStatusEnum["Voided"] = "voided";
    PaymentPaymentStatusEnum["Deleted"] = "deleted";
})(PaymentPaymentStatusEnum || (PaymentPaymentStatusEnum = {}));
export var PaymentPaymentTypeEnum;
(function (PaymentPaymentTypeEnum) {
    PaymentPaymentTypeEnum["AccountsReceivable"] = "accounts_receivable";
    PaymentPaymentTypeEnum["AccountsPayable"] = "accounts_payable";
    PaymentPaymentTypeEnum["AccountsReceivableCredit"] = "accounts_receivable_credit";
    PaymentPaymentTypeEnum["AccountsPayableCredit"] = "accounts_payable_credit";
    PaymentPaymentTypeEnum["AccountsReceivableOverpayment"] = "accounts_receivable_overpayment";
    PaymentPaymentTypeEnum["AccountsPayableOverpayment"] = "accounts_payable_overpayment";
    PaymentPaymentTypeEnum["AccountsReceivablePrepayment"] = "accounts_receivable_prepayment";
    PaymentPaymentTypeEnum["AccountsPayablePrepayment"] = "accounts_payable_prepayment";
})(PaymentPaymentTypeEnum || (PaymentPaymentTypeEnum = {}));
var PaymentInput = /** @class */ (function (_super) {
    __extends(PaymentInput, _super);
    function PaymentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", LinkedLedgerAccountInput)
    ], PaymentInput.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts_receivable_account_id" }),
        __metadata("design:type", String)
    ], PaymentInput.prototype, "accountsReceivableAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts_receivable_account_type" }),
        __metadata("design:type", String)
    ], PaymentInput.prototype, "accountsReceivableAccountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allocations", elemType: PaymentAllocationsInput }),
        __metadata("design:type", Array)
    ], PaymentInput.prototype, "allocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], PaymentInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_rate" }),
        __metadata("design:type", Number)
    ], PaymentInput.prototype, "currencyRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", LinkedCustomerInput)
    ], PaymentInput.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_id" }),
        __metadata("design:type", String)
    ], PaymentInput.prototype, "displayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], PaymentInput.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_method" }),
        __metadata("design:type", String)
    ], PaymentInput.prototype, "paymentMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_method_reference" }),
        __metadata("design:type", String)
    ], PaymentInput.prototype, "paymentMethodReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciled" }),
        __metadata("design:type", Boolean)
    ], PaymentInput.prototype, "reconciled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], PaymentInput.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], PaymentInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PaymentInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplier" }),
        __metadata("design:type", LinkedSupplierInput)
    ], PaymentInput.prototype, "supplier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], PaymentInput.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_date" }),
        __metadata("design:type", Date)
    ], PaymentInput.prototype, "transactionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PaymentInput.prototype, "type", void 0);
    return PaymentInput;
}(SpeakeasyBase));
export { PaymentInput };
var Payment = /** @class */ (function (_super) {
    __extends(Payment, _super);
    function Payment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", LinkedLedgerAccount)
    ], Payment.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts_receivable_account_id" }),
        __metadata("design:type", String)
    ], Payment.prototype, "accountsReceivableAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts_receivable_account_type" }),
        __metadata("design:type", String)
    ], Payment.prototype, "accountsReceivableAccountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allocations", elemType: PaymentAllocations }),
        __metadata("design:type", Array)
    ], Payment.prototype, "allocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Payment.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Payment.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Payment.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_rate" }),
        __metadata("design:type", Number)
    ], Payment.prototype, "currencyRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", LinkedCustomer)
    ], Payment.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_id" }),
        __metadata("design:type", String)
    ], Payment.prototype, "displayId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downstream_id" }),
        __metadata("design:type", String)
    ], Payment.prototype, "downstreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Payment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], Payment.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_method" }),
        __metadata("design:type", String)
    ], Payment.prototype, "paymentMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=payment_method_reference" }),
        __metadata("design:type", String)
    ], Payment.prototype, "paymentMethodReference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reconciled" }),
        __metadata("design:type", Boolean)
    ], Payment.prototype, "reconciled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], Payment.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], Payment.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Payment.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplier" }),
        __metadata("design:type", LinkedSupplier)
    ], Payment.prototype, "supplier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], Payment.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transaction_date" }),
        __metadata("design:type", Date)
    ], Payment.prototype, "transactionDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Payment.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Payment.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Payment.prototype, "updatedBy", void 0);
    return Payment;
}(SpeakeasyBase));
export { Payment };
