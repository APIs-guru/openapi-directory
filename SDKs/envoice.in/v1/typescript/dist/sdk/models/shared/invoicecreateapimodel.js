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
import { InvoiceCreateAttachmentApiModel } from "./invoicecreateattachmentapimodel";
import { InvoiceCreateItemApiModel } from "./invoicecreateitemapimodel";
import { InvoiceGatewayApiModel } from "./invoicegatewayapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";
export var InvoiceCreateApiModelStatusEnum;
(function (InvoiceCreateApiModelStatusEnum) {
    InvoiceCreateApiModelStatusEnum["Draft"] = "Draft";
    InvoiceCreateApiModelStatusEnum["Paid"] = "Paid";
    InvoiceCreateApiModelStatusEnum["Unpaid"] = "Unpaid";
    InvoiceCreateApiModelStatusEnum["Overdue"] = "Overdue";
    InvoiceCreateApiModelStatusEnum["Void"] = "Void";
})(InvoiceCreateApiModelStatusEnum || (InvoiceCreateApiModelStatusEnum = {}));
var InvoiceCreateApiModel = /** @class */ (function (_super) {
    __extends(InvoiceCreateApiModel, _super);
    function InvoiceCreateApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: InvoiceCreateAttachmentApiModel }),
        __metadata("design:type", Array)
    ], InvoiceCreateApiModel.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientId" }),
        __metadata("design:type", Number)
    ], InvoiceCreateApiModel.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClonedFromId" }),
        __metadata("design:type", Number)
    ], InvoiceCreateApiModel.prototype, "clonedFromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], InvoiceCreateApiModel.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Duedate" }),
        __metadata("design:type", Date)
    ], InvoiceCreateApiModel.prototype, "duedate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvoiceCategoryId" }),
        __metadata("design:type", Number)
    ], InvoiceCreateApiModel.prototype, "invoiceCategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssuedOn" }),
        __metadata("design:type", Date)
    ], InvoiceCreateApiModel.prototype, "issuedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: InvoiceCreateItemApiModel }),
        __metadata("design:type", Array)
    ], InvoiceCreateApiModel.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], InvoiceCreateApiModel.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", String)
    ], InvoiceCreateApiModel.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: InvoiceGatewayApiModel }),
        __metadata("design:type", Array)
    ], InvoiceCreateApiModel.prototype, "paymentGateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PoNumber" }),
        __metadata("design:type", String)
    ], InvoiceCreateApiModel.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringProfile" }),
        __metadata("design:type", InvoiceRecurringApiModel)
    ], InvoiceCreateApiModel.prototype, "recurringProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringProfileId" }),
        __metadata("design:type", Number)
    ], InvoiceCreateApiModel.prototype, "recurringProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShouldSendReminders" }),
        __metadata("design:type", Boolean)
    ], InvoiceCreateApiModel.prototype, "shouldSendReminders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], InvoiceCreateApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Terms" }),
        __metadata("design:type", String)
    ], InvoiceCreateApiModel.prototype, "terms", void 0);
    return InvoiceCreateApiModel;
}(SpeakeasyBase));
export { InvoiceCreateApiModel };
