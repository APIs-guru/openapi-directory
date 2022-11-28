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
import { LinkedInvoiceItemInput } from "./linkedinvoiceitem";
import { LinkedLedgerAccountInput } from "./linkedledgeraccount";
import { LinkedTaxRateInput } from "./linkedtaxrate";
import { LinkedInvoiceItem } from "./linkedinvoiceitem";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedTaxRate } from "./linkedtaxrate";
export var InvoiceLineItemTypeEnum;
(function (InvoiceLineItemTypeEnum) {
    InvoiceLineItemTypeEnum["SalesItem"] = "sales_item";
    InvoiceLineItemTypeEnum["Discount"] = "discount";
    InvoiceLineItemTypeEnum["Info"] = "info";
    InvoiceLineItemTypeEnum["SubTotal"] = "sub_total";
})(InvoiceLineItemTypeEnum || (InvoiceLineItemTypeEnum = {}));
var InvoiceLineItemInput = /** @class */ (function (_super) {
    __extends(InvoiceLineItemInput, _super);
    function InvoiceLineItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], InvoiceLineItemInput.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department_id" }),
        __metadata("design:type", String)
    ], InvoiceLineItemInput.prototype, "departmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InvoiceLineItemInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_percentage" }),
        __metadata("design:type", Number)
    ], InvoiceLineItemInput.prototype, "discountPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item" }),
        __metadata("design:type", LinkedInvoiceItemInput)
    ], InvoiceLineItemInput.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ledger_account" }),
        __metadata("design:type", LinkedLedgerAccountInput)
    ], InvoiceLineItemInput.prototype, "ledgerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", Number)
    ], InvoiceLineItemInput.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], InvoiceLineItemInput.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], InvoiceLineItemInput.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_id" }),
        __metadata("design:type", String)
    ], InvoiceLineItemInput.prototype, "rowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], InvoiceLineItemInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_amount" }),
        __metadata("design:type", Number)
    ], InvoiceLineItemInput.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRateInput)
    ], InvoiceLineItemInput.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], InvoiceLineItemInput.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InvoiceLineItemInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_of_measure" }),
        __metadata("design:type", String)
    ], InvoiceLineItemInput.prototype, "unitOfMeasure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], InvoiceLineItemInput.prototype, "unitPrice", void 0);
    return InvoiceLineItemInput;
}(SpeakeasyBase));
export { InvoiceLineItemInput };
var InvoiceLineItem = /** @class */ (function (_super) {
    __extends(InvoiceLineItem, _super);
    function InvoiceLineItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], InvoiceLineItem.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], InvoiceLineItem.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], InvoiceLineItem.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department_id" }),
        __metadata("design:type", String)
    ], InvoiceLineItem.prototype, "departmentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InvoiceLineItem.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_percentage" }),
        __metadata("design:type", Number)
    ], InvoiceLineItem.prototype, "discountPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], InvoiceLineItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=item" }),
        __metadata("design:type", LinkedInvoiceItem)
    ], InvoiceLineItem.prototype, "item", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ledger_account" }),
        __metadata("design:type", LinkedLedgerAccount)
    ], InvoiceLineItem.prototype, "ledgerAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_number" }),
        __metadata("design:type", Number)
    ], InvoiceLineItem.prototype, "lineNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_id" }),
        __metadata("design:type", String)
    ], InvoiceLineItem.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], InvoiceLineItem.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_id" }),
        __metadata("design:type", String)
    ], InvoiceLineItem.prototype, "rowId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], InvoiceLineItem.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_amount" }),
        __metadata("design:type", Number)
    ], InvoiceLineItem.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRate)
    ], InvoiceLineItem.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_amount" }),
        __metadata("design:type", Number)
    ], InvoiceLineItem.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InvoiceLineItem.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_of_measure" }),
        __metadata("design:type", String)
    ], InvoiceLineItem.prototype, "unitOfMeasure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], InvoiceLineItem.prototype, "unitPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], InvoiceLineItem.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], InvoiceLineItem.prototype, "updatedBy", void 0);
    return InvoiceLineItem;
}(SpeakeasyBase));
export { InvoiceLineItem };
