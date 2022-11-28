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
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomer } from "./linkedcustomer";
import { InvoiceLineItem } from "./invoicelineitem";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedCustomerInput } from "./linkedcustomer";
import { InvoiceLineItemInput } from "./invoicelineitem";
export var CreditNoteCreditNoteStatusEnum;
(function (CreditNoteCreditNoteStatusEnum) {
    CreditNoteCreditNoteStatusEnum["Draft"] = "draft";
    CreditNoteCreditNoteStatusEnum["Authorised"] = "authorised";
    CreditNoteCreditNoteStatusEnum["Paid"] = "paid";
    CreditNoteCreditNoteStatusEnum["Voided"] = "voided";
    CreditNoteCreditNoteStatusEnum["Deleted"] = "deleted";
})(CreditNoteCreditNoteStatusEnum || (CreditNoteCreditNoteStatusEnum = {}));
export var CreditNoteCreditNoteTypeEnum;
(function (CreditNoteCreditNoteTypeEnum) {
    CreditNoteCreditNoteTypeEnum["AccountsReceivableCredit"] = "accounts_receivable_credit";
    CreditNoteCreditNoteTypeEnum["AccountsPayableCredit"] = "accounts_payable_credit";
})(CreditNoteCreditNoteTypeEnum || (CreditNoteCreditNoteTypeEnum = {}));
var CreditNote = /** @class */ (function (_super) {
    __extends(CreditNote, _super);
    function CreditNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", LinkedLedgerAccount)
    ], CreditNote.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allocations" }),
        __metadata("design:type", Array)
    ], CreditNote.prototype, "allocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], CreditNote.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], CreditNote.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], CreditNote.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], CreditNote.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_rate" }),
        __metadata("design:type", Number)
    ], CreditNote.prototype, "currencyRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", LinkedCustomer)
    ], CreditNote.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_issued" }),
        __metadata("design:type", Date)
    ], CreditNote.prototype, "dateIssued", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_paid" }),
        __metadata("design:type", Date)
    ], CreditNote.prototype, "datePaid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreditNote.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_items", elemType: InvoiceLineItem }),
        __metadata("design:type", Array)
    ], CreditNote.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], CreditNote.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], CreditNote.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], CreditNote.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remaining_credit" }),
        __metadata("design:type", Number)
    ], CreditNote.prototype, "remainingCredit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], CreditNote.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CreditNote.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_total" }),
        __metadata("design:type", Number)
    ], CreditNote.prototype, "subTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_code" }),
        __metadata("design:type", String)
    ], CreditNote.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_inclusive" }),
        __metadata("design:type", Boolean)
    ], CreditNote.prototype, "taxInclusive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], CreditNote.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], CreditNote.prototype, "totalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreditNote.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], CreditNote.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], CreditNote.prototype, "updatedBy", void 0);
    return CreditNote;
}(SpeakeasyBase));
export { CreditNote };
var CreditNoteInput = /** @class */ (function (_super) {
    __extends(CreditNoteInput, _super);
    function CreditNoteInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", LinkedLedgerAccountInput)
    ], CreditNoteInput.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allocations" }),
        __metadata("design:type", Array)
    ], CreditNoteInput.prototype, "allocations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], CreditNoteInput.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], CreditNoteInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_rate" }),
        __metadata("design:type", Number)
    ], CreditNoteInput.prototype, "currencyRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", LinkedCustomerInput)
    ], CreditNoteInput.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_issued" }),
        __metadata("design:type", Date)
    ], CreditNoteInput.prototype, "dateIssued", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_paid" }),
        __metadata("design:type", Date)
    ], CreditNoteInput.prototype, "datePaid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_items", elemType: InvoiceLineItemInput }),
        __metadata("design:type", Array)
    ], CreditNoteInput.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], CreditNoteInput.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], CreditNoteInput.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], CreditNoteInput.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remaining_credit" }),
        __metadata("design:type", Number)
    ], CreditNoteInput.prototype, "remainingCredit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], CreditNoteInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CreditNoteInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_total" }),
        __metadata("design:type", Number)
    ], CreditNoteInput.prototype, "subTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_code" }),
        __metadata("design:type", String)
    ], CreditNoteInput.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_inclusive" }),
        __metadata("design:type", Boolean)
    ], CreditNoteInput.prototype, "taxInclusive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], CreditNoteInput.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], CreditNoteInput.prototype, "totalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreditNoteInput.prototype, "type", void 0);
    return CreditNoteInput;
}(SpeakeasyBase));
export { CreditNoteInput };
