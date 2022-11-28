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
import { LinkedTaxRateInput } from "./linkedtaxrate";
import { LinkedLedgerAccount } from "./linkedledgeraccount";
import { LinkedTaxRate } from "./linkedtaxrate";
var InvoiceItemPurchaseDetailsInput = /** @class */ (function (_super) {
    __extends(InvoiceItemPurchaseDetailsInput, _super);
    function InvoiceItemPurchaseDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_inclusive" }),
        __metadata("design:type", Boolean)
    ], InvoiceItemPurchaseDetailsInput.prototype, "taxInclusive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRateInput)
    ], InvoiceItemPurchaseDetailsInput.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_of_measure" }),
        __metadata("design:type", String)
    ], InvoiceItemPurchaseDetailsInput.prototype, "unitOfMeasure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], InvoiceItemPurchaseDetailsInput.prototype, "unitPrice", void 0);
    return InvoiceItemPurchaseDetailsInput;
}(SpeakeasyBase));
export { InvoiceItemPurchaseDetailsInput };
var InvoiceItemSalesDetailsInput = /** @class */ (function (_super) {
    __extends(InvoiceItemSalesDetailsInput, _super);
    function InvoiceItemSalesDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_inclusive" }),
        __metadata("design:type", Boolean)
    ], InvoiceItemSalesDetailsInput.prototype, "taxInclusive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRateInput)
    ], InvoiceItemSalesDetailsInput.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_of_measure" }),
        __metadata("design:type", String)
    ], InvoiceItemSalesDetailsInput.prototype, "unitOfMeasure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], InvoiceItemSalesDetailsInput.prototype, "unitPrice", void 0);
    return InvoiceItemSalesDetailsInput;
}(SpeakeasyBase));
export { InvoiceItemSalesDetailsInput };
var InvoiceItemPurchaseDetails = /** @class */ (function (_super) {
    __extends(InvoiceItemPurchaseDetails, _super);
    function InvoiceItemPurchaseDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_inclusive" }),
        __metadata("design:type", Boolean)
    ], InvoiceItemPurchaseDetails.prototype, "taxInclusive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRate)
    ], InvoiceItemPurchaseDetails.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_of_measure" }),
        __metadata("design:type", String)
    ], InvoiceItemPurchaseDetails.prototype, "unitOfMeasure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], InvoiceItemPurchaseDetails.prototype, "unitPrice", void 0);
    return InvoiceItemPurchaseDetails;
}(SpeakeasyBase));
export { InvoiceItemPurchaseDetails };
var InvoiceItemSalesDetails = /** @class */ (function (_super) {
    __extends(InvoiceItemSalesDetails, _super);
    function InvoiceItemSalesDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_inclusive" }),
        __metadata("design:type", Boolean)
    ], InvoiceItemSalesDetails.prototype, "taxInclusive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_rate" }),
        __metadata("design:type", LinkedTaxRate)
    ], InvoiceItemSalesDetails.prototype, "taxRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_of_measure" }),
        __metadata("design:type", String)
    ], InvoiceItemSalesDetails.prototype, "unitOfMeasure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], InvoiceItemSalesDetails.prototype, "unitPrice", void 0);
    return InvoiceItemSalesDetails;
}(SpeakeasyBase));
export { InvoiceItemSalesDetails };
export var InvoiceItemTypeEnum;
(function (InvoiceItemTypeEnum) {
    InvoiceItemTypeEnum["Inventory"] = "inventory";
    InvoiceItemTypeEnum["Service"] = "service";
    InvoiceItemTypeEnum["Other"] = "other";
})(InvoiceItemTypeEnum || (InvoiceItemTypeEnum = {}));
var InvoiceItemInput = /** @class */ (function (_super) {
    __extends(InvoiceItemInput, _super);
    function InvoiceItemInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], InvoiceItemInput.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset_account" }),
        __metadata("design:type", LinkedLedgerAccountInput)
    ], InvoiceItemInput.prototype, "assetAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], InvoiceItemInput.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InvoiceItemInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expense_account" }),
        __metadata("design:type", LinkedLedgerAccountInput)
    ], InvoiceItemInput.prototype, "expenseAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=income_account" }),
        __metadata("design:type", LinkedLedgerAccountInput)
    ], InvoiceItemInput.prototype, "incomeAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventory_date" }),
        __metadata("design:type", Date)
    ], InvoiceItemInput.prototype, "inventoryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InvoiceItemInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchase_details" }),
        __metadata("design:type", InvoiceItemPurchaseDetailsInput)
    ], InvoiceItemInput.prototype, "purchaseDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchased" }),
        __metadata("design:type", Boolean)
    ], InvoiceItemInput.prototype, "purchased", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], InvoiceItemInput.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], InvoiceItemInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sales_details" }),
        __metadata("design:type", InvoiceItemSalesDetailsInput)
    ], InvoiceItemInput.prototype, "salesDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sold" }),
        __metadata("design:type", Boolean)
    ], InvoiceItemInput.prototype, "sold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracked" }),
        __metadata("design:type", Boolean)
    ], InvoiceItemInput.prototype, "tracked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InvoiceItemInput.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], InvoiceItemInput.prototype, "unitPrice", void 0);
    return InvoiceItemInput;
}(SpeakeasyBase));
export { InvoiceItemInput };
var InvoiceItem = /** @class */ (function (_super) {
    __extends(InvoiceItem, _super);
    function InvoiceItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], InvoiceItem.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=asset_account" }),
        __metadata("design:type", LinkedLedgerAccount)
    ], InvoiceItem.prototype, "assetAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], InvoiceItem.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], InvoiceItem.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], InvoiceItem.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], InvoiceItem.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expense_account" }),
        __metadata("design:type", LinkedLedgerAccount)
    ], InvoiceItem.prototype, "expenseAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], InvoiceItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=income_account" }),
        __metadata("design:type", LinkedLedgerAccount)
    ], InvoiceItem.prototype, "incomeAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventory_date" }),
        __metadata("design:type", Date)
    ], InvoiceItem.prototype, "inventoryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InvoiceItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchase_details" }),
        __metadata("design:type", InvoiceItemPurchaseDetails)
    ], InvoiceItem.prototype, "purchaseDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purchased" }),
        __metadata("design:type", Boolean)
    ], InvoiceItem.prototype, "purchased", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], InvoiceItem.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], InvoiceItem.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sales_details" }),
        __metadata("design:type", InvoiceItemSalesDetails)
    ], InvoiceItem.prototype, "salesDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sold" }),
        __metadata("design:type", Boolean)
    ], InvoiceItem.prototype, "sold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tracked" }),
        __metadata("design:type", Boolean)
    ], InvoiceItem.prototype, "tracked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InvoiceItem.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_price" }),
        __metadata("design:type", Number)
    ], InvoiceItem.prototype, "unitPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], InvoiceItem.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], InvoiceItem.prototype, "updatedBy", void 0);
    return InvoiceItem;
}(SpeakeasyBase));
export { InvoiceItem };
