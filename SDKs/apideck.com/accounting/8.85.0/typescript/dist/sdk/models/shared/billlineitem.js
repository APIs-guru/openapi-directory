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
import { LinkedInvoiceItem } from "./linkedinvoiceitem";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedTaxRate } from "./linkedtaxrate";
import { LinkedInvoiceItemInput } from "./linkedinvoiceitem";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRateInput } from "./linkedtaxrate";
export var BillLineItemTypeEnum;
(function (BillLineItemTypeEnum) {
    BillLineItemTypeEnum["ExpenseItem"] = "expense_item";
    BillLineItemTypeEnum["ExpenseAccount"] = "expense_account";
})(BillLineItemTypeEnum || (BillLineItemTypeEnum = {}));
var BillLineItem = /** @class */ (function (_super) {
    __extends(BillLineItem, _super);
    function BillLineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], BillLineItem.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], BillLineItem.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], BillLineItem.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department_id" }),
        __metadata("design:type", String)
    ], BillLineItem.prototype, "departmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BillLineItem.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_percentage" }),
        __metadata("design:type", Number)
    ], BillLineItem.prototype, "discountPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], BillLineItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item" }),
        __metadata("design:type", LinkedInvoiceItem)
    ], BillLineItem.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ledger_account" }),
        __metadata("design:type", LinkedLedgerAccount)
    ], BillLineItem.prototype, "ledgerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", Number)
    ], BillLineItem.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], BillLineItem.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], BillLineItem.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_id" }),
        __metadata("design:type", String)
    ], BillLineItem.prototype, "rowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], BillLineItem.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_amount" }),
        __metadata("design:type", Number)
    ], BillLineItem.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRate)
    ], BillLineItem.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], BillLineItem.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BillLineItem.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_of_measure" }),
        __metadata("design:type", String)
    ], BillLineItem.prototype, "unitOfMeasure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], BillLineItem.prototype, "unitPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], BillLineItem.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], BillLineItem.prototype, "updatedBy", void 0);
    return BillLineItem;
}(SpeakeasyBase));
export { BillLineItem };
var BillLineItemInput = /** @class */ (function (_super) {
    __extends(BillLineItemInput, _super);
    function BillLineItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], BillLineItemInput.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department_id" }),
        __metadata("design:type", String)
    ], BillLineItemInput.prototype, "departmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], BillLineItemInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_percentage" }),
        __metadata("design:type", Number)
    ], BillLineItemInput.prototype, "discountPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item" }),
        __metadata("design:type", LinkedInvoiceItemInput)
    ], BillLineItemInput.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ledger_account" }),
        __metadata("design:type", LinkedLedgerAccountInput)
    ], BillLineItemInput.prototype, "ledgerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", Number)
    ], BillLineItemInput.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], BillLineItemInput.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], BillLineItemInput.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_id" }),
        __metadata("design:type", String)
    ], BillLineItemInput.prototype, "rowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], BillLineItemInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_amount" }),
        __metadata("design:type", Number)
    ], BillLineItemInput.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRateInput)
    ], BillLineItemInput.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], BillLineItemInput.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], BillLineItemInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_of_measure" }),
        __metadata("design:type", String)
    ], BillLineItemInput.prototype, "unitOfMeasure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], BillLineItemInput.prototype, "unitPrice", void 0);
    return BillLineItemInput;
}(SpeakeasyBase));
export { BillLineItemInput };
