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
import { Activity } from "./activity";
import { InvoiceAttachment } from "./invoiceattachment";
import { InvoiceItem } from "./invoiceitem";
import { PaymentGatewayForInvoice } from "./paymentgatewayforinvoice";
import { Payment } from "./payment";
export var InvoiceStatusEnum;
(function (InvoiceStatusEnum) {
    InvoiceStatusEnum["Draft"] = "Draft";
    InvoiceStatusEnum["Paid"] = "Paid";
    InvoiceStatusEnum["Unpaid"] = "Unpaid";
    InvoiceStatusEnum["Overdue"] = "Overdue";
    InvoiceStatusEnum["Void"] = "Void";
})(InvoiceStatusEnum || (InvoiceStatusEnum = {}));
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessToken" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Activities", elemType: Activity }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: InvoiceAttachment }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientId" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClonedFromId" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "clonedFromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DiscountAmount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "discountAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Duedate" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "duedate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnablePartialPayments" }),
        __metadata("design:type", Boolean)
    ], Invoice.prototype, "enablePartialPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EstimationId" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "estimationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvoiceCategoryId" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "invoiceCategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssuedOn" }),
        __metadata("design:type", Date)
    ], Invoice.prototype, "issuedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: InvoiceItem }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderId" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: PaymentGatewayForInvoice }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "paymentGateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentLinkId" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "paymentLinkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Payments", elemType: Payment }),
        __metadata("design:type", Array)
    ], Invoice.prototype, "payments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PoNumber" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringProfileId" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "recurringProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShouldSendReminders" }),
        __metadata("design:type", Boolean)
    ], Invoice.prototype, "shouldSendReminders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubTotalAmount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "subTotalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxAmount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Terms" }),
        __metadata("design:type", String)
    ], Invoice.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalAmount" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "totalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", Number)
    ], Invoice.prototype, "userId", void 0);
    return Invoice;
}(SpeakeasyBase));
export { Invoice };
