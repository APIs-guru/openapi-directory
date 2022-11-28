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
import { InvoiceActivityApiModel } from "./invoiceactivityapimodel";
import { InvoiceAttachmentApiModel } from "./invoiceattachmentapimodel";
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { InvoiceItemApiModel } from "./invoiceitemapimodel";
import { InvoiceGatewayApiModel } from "./invoicegatewayapimodel";
import { InvoicePaymentApiModel } from "./invoicepaymentapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";
export var InvoiceFullDetailsApiModelStatusEnum;
(function (InvoiceFullDetailsApiModelStatusEnum) {
    InvoiceFullDetailsApiModelStatusEnum["Draft"] = "Draft";
    InvoiceFullDetailsApiModelStatusEnum["Paid"] = "Paid";
    InvoiceFullDetailsApiModelStatusEnum["Unpaid"] = "Unpaid";
    InvoiceFullDetailsApiModelStatusEnum["Overdue"] = "Overdue";
    InvoiceFullDetailsApiModelStatusEnum["Void"] = "Void";
})(InvoiceFullDetailsApiModelStatusEnum || (InvoiceFullDetailsApiModelStatusEnum = {}));
var InvoiceFullDetailsApiModel = /** @class */ (function (_super) {
    __extends(InvoiceFullDetailsApiModel, _super);
    function InvoiceFullDetailsApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessToken" }),
        __metadata("design:type", String)
    ], InvoiceFullDetailsApiModel.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Activities", elemType: InvoiceActivityApiModel }),
        __metadata("design:type", Array)
    ], InvoiceFullDetailsApiModel.prototype, "activities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: InvoiceAttachmentApiModel }),
        __metadata("design:type", Array)
    ], InvoiceFullDetailsApiModel.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Client" }),
        __metadata("design:type", ClientDetailsApiModel)
    ], InvoiceFullDetailsApiModel.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClonedFromId" }),
        __metadata("design:type", Number)
    ], InvoiceFullDetailsApiModel.prototype, "clonedFromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", CurrencyDetailsApiModel)
    ], InvoiceFullDetailsApiModel.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DiscountAmount" }),
        __metadata("design:type", Number)
    ], InvoiceFullDetailsApiModel.prototype, "discountAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Duedate" }),
        __metadata("design:type", Date)
    ], InvoiceFullDetailsApiModel.prototype, "duedate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnablePartialPayments" }),
        __metadata("design:type", Boolean)
    ], InvoiceFullDetailsApiModel.prototype, "enablePartialPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], InvoiceFullDetailsApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvoiceCategoryId" }),
        __metadata("design:type", Number)
    ], InvoiceFullDetailsApiModel.prototype, "invoiceCategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssuedOn" }),
        __metadata("design:type", Date)
    ], InvoiceFullDetailsApiModel.prototype, "issuedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: InvoiceItemApiModel }),
        __metadata("design:type", Array)
    ], InvoiceFullDetailsApiModel.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], InvoiceFullDetailsApiModel.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", String)
    ], InvoiceFullDetailsApiModel.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: InvoiceGatewayApiModel }),
        __metadata("design:type", Array)
    ], InvoiceFullDetailsApiModel.prototype, "paymentGateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Payments", elemType: InvoicePaymentApiModel }),
        __metadata("design:type", Array)
    ], InvoiceFullDetailsApiModel.prototype, "payments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PoNumber" }),
        __metadata("design:type", String)
    ], InvoiceFullDetailsApiModel.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringProfile" }),
        __metadata("design:type", InvoiceRecurringApiModel)
    ], InvoiceFullDetailsApiModel.prototype, "recurringProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringProfileId" }),
        __metadata("design:type", Number)
    ], InvoiceFullDetailsApiModel.prototype, "recurringProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShouldSendReminders" }),
        __metadata("design:type", Boolean)
    ], InvoiceFullDetailsApiModel.prototype, "shouldSendReminders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], InvoiceFullDetailsApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubTotalAmount" }),
        __metadata("design:type", Number)
    ], InvoiceFullDetailsApiModel.prototype, "subTotalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxAmount" }),
        __metadata("design:type", Number)
    ], InvoiceFullDetailsApiModel.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Terms" }),
        __metadata("design:type", String)
    ], InvoiceFullDetailsApiModel.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalAmount" }),
        __metadata("design:type", Number)
    ], InvoiceFullDetailsApiModel.prototype, "totalAmount", void 0);
    return InvoiceFullDetailsApiModel;
}(SpeakeasyBase));
export { InvoiceFullDetailsApiModel };
