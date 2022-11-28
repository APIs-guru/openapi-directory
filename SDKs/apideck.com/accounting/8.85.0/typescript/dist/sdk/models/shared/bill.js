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
import { CurrencyEnum } from "./currencyenum";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { BillLineItemInput } from "./billlineitem";
import { LinkedSupplierInput } from "./linkedsupplier";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { BillLineItem } from "./billlineitem";
import { LinkedSupplier } from "./linkedsupplier";
export var BillStatusEnum;
(function (BillStatusEnum) {
    BillStatusEnum["Draft"] = "draft";
    BillStatusEnum["Submitted"] = "submitted";
    BillStatusEnum["Authorised"] = "authorised";
    BillStatusEnum["PartiallyPaid"] = "partially_paid";
    BillStatusEnum["Paid"] = "paid";
    BillStatusEnum["Void"] = "void";
    BillStatusEnum["Credit"] = "credit";
    BillStatusEnum["Deleted"] = "deleted";
})(BillStatusEnum || (BillStatusEnum = {}));
var BillInput = /** @class */ (function (_super) {
    __extends(BillInput, _super);
    function BillInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], BillInput.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bill_date" }),
        __metadata("design:type", Date)
    ], BillInput.prototype, "billDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bill_number" }),
        __metadata("design:type", String)
    ], BillInput.prototype, "billNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], BillInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_rate" }),
        __metadata("design:type", Number)
    ], BillInput.prototype, "currencyRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deposit" }),
        __metadata("design:type", Number)
    ], BillInput.prototype, "deposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_date" }),
        __metadata("design:type", Date)
    ], BillInput.prototype, "dueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ledger_account" }),
        __metadata("design:type", LinkedLedgerAccountInput)
    ], BillInput.prototype, "ledgerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_items", elemType: BillLineItemInput }),
        __metadata("design:type", Array)
    ], BillInput.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], BillInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paid_date" }),
        __metadata("design:type", Date)
    ], BillInput.prototype, "paidDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=po_number" }),
        __metadata("design:type", String)
    ], BillInput.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], BillInput.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], BillInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], BillInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_total" }),
        __metadata("design:type", Number)
    ], BillInput.prototype, "subTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplier" }),
        __metadata("design:type", LinkedSupplierInput)
    ], BillInput.prototype, "supplier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_code" }),
        __metadata("design:type", String)
    ], BillInput.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_inclusive" }),
        __metadata("design:type", Boolean)
    ], BillInput.prototype, "taxInclusive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms" }),
        __metadata("design:type", String)
    ], BillInput.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], BillInput.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], BillInput.prototype, "totalTax", void 0);
    return BillInput;
}(SpeakeasyBase));
export { BillInput };
var Bill = /** @class */ (function (_super) {
    __extends(Bill, _super);
    function Bill() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], Bill.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bill_date" }),
        __metadata("design:type", Date)
    ], Bill.prototype, "billDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bill_number" }),
        __metadata("design:type", String)
    ], Bill.prototype, "billNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Bill.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Bill.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Bill.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_rate" }),
        __metadata("design:type", Number)
    ], Bill.prototype, "currencyRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deposit" }),
        __metadata("design:type", Number)
    ], Bill.prototype, "deposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downstream_id" }),
        __metadata("design:type", String)
    ], Bill.prototype, "downstreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_date" }),
        __metadata("design:type", Date)
    ], Bill.prototype, "dueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Bill.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ledger_account" }),
        __metadata("design:type", LinkedLedgerAccount)
    ], Bill.prototype, "ledgerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_items", elemType: BillLineItem }),
        __metadata("design:type", Array)
    ], Bill.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], Bill.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paid_date" }),
        __metadata("design:type", Date)
    ], Bill.prototype, "paidDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=po_number" }),
        __metadata("design:type", String)
    ], Bill.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], Bill.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], Bill.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Bill.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_total" }),
        __metadata("design:type", Number)
    ], Bill.prototype, "subTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supplier" }),
        __metadata("design:type", LinkedSupplier)
    ], Bill.prototype, "supplier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_code" }),
        __metadata("design:type", String)
    ], Bill.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_inclusive" }),
        __metadata("design:type", Boolean)
    ], Bill.prototype, "taxInclusive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms" }),
        __metadata("design:type", String)
    ], Bill.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], Bill.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], Bill.prototype, "totalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Bill.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Bill.prototype, "updatedBy", void 0);
    return Bill;
}(SpeakeasyBase));
export { Bill };
