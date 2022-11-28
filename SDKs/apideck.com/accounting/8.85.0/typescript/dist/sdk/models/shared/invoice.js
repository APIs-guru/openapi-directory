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
import { Address } from "./address";
import { CurrencyEnum } from "./currencyenum";
import { LinkedCustomer } from "./linkedcustomer";
import { InvoiceLineItem } from "./invoicelineitem";
import { LinkedCustomerInput } from "./linkedcustomer";
import { InvoiceLineItemInput } from "./invoicelineitem";
export var InvoiceStatusEnum;
(function (InvoiceStatusEnum) {
    InvoiceStatusEnum["Draft"] = "draft";
    InvoiceStatusEnum["Submitted"] = "submitted";
    InvoiceStatusEnum["Authorised"] = "authorised";
    InvoiceStatusEnum["PartiallyPaid"] = "partially_paid";
    InvoiceStatusEnum["Paid"] = "paid";
    InvoiceStatusEnum["Void"] = "void";
    InvoiceStatusEnum["Credit"] = "credit";
    InvoiceStatusEnum["Deleted"] = "deleted";
})(InvoiceStatusEnum || (InvoiceStatusEnum = {}));
export var InvoiceInvoiceTypeEnum;
(function (InvoiceInvoiceTypeEnum) {
    InvoiceInvoiceTypeEnum["Standard"] = "standard";
    InvoiceInvoiceTypeEnum["Credit"] = "credit";
    InvoiceInvoiceTypeEnum["Service"] = "service";
    InvoiceInvoiceTypeEnum["Product"] = "product";
    InvoiceInvoiceTypeEnum["Supplier"] = "supplier";
    InvoiceInvoiceTypeEnum["Other"] = "other";
})(InvoiceInvoiceTypeEnum || (InvoiceInvoiceTypeEnum = {}));
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billing_address" }),
        __metadata("design:type", Address)
    ], Invoice.prototype, "billingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "createdBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_rate" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "currencyRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", LinkedCustomer)
    ], Invoice.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_memo" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "customerMemo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deposit" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "deposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_percentage" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "discountPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downstream_id" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "downstreamId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_date" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "dueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoice_date" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "invoiceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoice_sent" }),
        __metadata("design:type", Boolean)
    ], Invoice.prototype, "invoiceSent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_items", elemType: InvoiceLineItem }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=po_number" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_address" }),
        __metadata("design:type", Address)
    ], Invoice.prototype, "shippingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_document_url" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "sourceDocumentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_total" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "subTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_code" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_inclusive" }),
        __metadata("design:type", Boolean)
    ], Invoice.prototype, "taxInclusive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_id" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "templateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "totalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "updatedBy", void 0);
    return Invoice;
}(SpeakeasyBase));
export { Invoice };
var InvoiceInput = /** @class */ (function (_super) {
    __extends(InvoiceInput, _super);
    function InvoiceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], InvoiceInput.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billing_address" }),
        __metadata("design:type", Address)
    ], InvoiceInput.prototype, "billingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency_rate" }),
        __metadata("design:type", Number)
    ], InvoiceInput.prototype, "currencyRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer" }),
        __metadata("design:type", LinkedCustomerInput)
    ], InvoiceInput.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customer_memo" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "customerMemo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deposit" }),
        __metadata("design:type", Number)
    ], InvoiceInput.prototype, "deposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=discount_percentage" }),
        __metadata("design:type", Number)
    ], InvoiceInput.prototype, "discountPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=due_date" }),
        __metadata("design:type", Date)
    ], InvoiceInput.prototype, "dueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoice_date" }),
        __metadata("design:type", Date)
    ], InvoiceInput.prototype, "invoiceDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invoice_sent" }),
        __metadata("design:type", Boolean)
    ], InvoiceInput.prototype, "invoiceSent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=line_items", elemType: InvoiceLineItemInput }),
        __metadata("design:type", Array)
    ], InvoiceInput.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=po_number" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reference" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=row_version" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "rowVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shipping_address" }),
        __metadata("design:type", Address)
    ], InvoiceInput.prototype, "shippingAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source_document_url" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "sourceDocumentUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub_total" }),
        __metadata("design:type", Number)
    ], InvoiceInput.prototype, "subTotal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_code" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "taxCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_inclusive" }),
        __metadata("design:type", Boolean)
    ], InvoiceInput.prototype, "taxInclusive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template_id" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "templateId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=terms" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], InvoiceInput.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total_tax" }),
        __metadata("design:type", Number)
    ], InvoiceInput.prototype, "totalTax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InvoiceInput.prototype, "type", void 0);
    return InvoiceInput;
}(SpeakeasyBase));
export { InvoiceInput };
