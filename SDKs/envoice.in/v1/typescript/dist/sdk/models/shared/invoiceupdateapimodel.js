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
import { InvoiceUpdateAttachmentApiModel } from "./invoiceupdateattachmentapimodel";
import { InvoiceUpdateItemApiModel } from "./invoiceupdateitemapimodel";
import { InvoiceGatewayApiModel } from "./invoicegatewayapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";
export var InvoiceUpdateApiModelStatusEnum;
(function (InvoiceUpdateApiModelStatusEnum) {
    InvoiceUpdateApiModelStatusEnum["Draft"] = "Draft";
    InvoiceUpdateApiModelStatusEnum["Paid"] = "Paid";
    InvoiceUpdateApiModelStatusEnum["Unpaid"] = "Unpaid";
    InvoiceUpdateApiModelStatusEnum["Overdue"] = "Overdue";
    InvoiceUpdateApiModelStatusEnum["Void"] = "Void";
})(InvoiceUpdateApiModelStatusEnum || (InvoiceUpdateApiModelStatusEnum = {}));
var InvoiceUpdateApiModel = /** @class */ (function (_super) {
    __extends(InvoiceUpdateApiModel, _super);
    function InvoiceUpdateApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Attachments", elemType: InvoiceUpdateAttachmentApiModel }),
        __metadata("design:type", Array)
    ], InvoiceUpdateApiModel.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientId" }),
        __metadata("design:type", Number)
    ], InvoiceUpdateApiModel.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClonedFromId" }),
        __metadata("design:type", Number)
    ], InvoiceUpdateApiModel.prototype, "clonedFromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyId" }),
        __metadata("design:type", Number)
    ], InvoiceUpdateApiModel.prototype, "currencyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Duedate" }),
        __metadata("design:type", Date)
    ], InvoiceUpdateApiModel.prototype, "duedate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], InvoiceUpdateApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvoiceCategoryId" }),
        __metadata("design:type", Number)
    ], InvoiceUpdateApiModel.prototype, "invoiceCategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssuedOn" }),
        __metadata("design:type", Date)
    ], InvoiceUpdateApiModel.prototype, "issuedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Items", elemType: InvoiceUpdateItemApiModel }),
        __metadata("design:type", Array)
    ], InvoiceUpdateApiModel.prototype, "items", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], InvoiceUpdateApiModel.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", String)
    ], InvoiceUpdateApiModel.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentGateways", elemType: InvoiceGatewayApiModel }),
        __metadata("design:type", Array)
    ], InvoiceUpdateApiModel.prototype, "paymentGateways", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PoNumber" }),
        __metadata("design:type", String)
    ], InvoiceUpdateApiModel.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringProfile" }),
        __metadata("design:type", InvoiceRecurringApiModel)
    ], InvoiceUpdateApiModel.prototype, "recurringProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringProfileId" }),
        __metadata("design:type", Number)
    ], InvoiceUpdateApiModel.prototype, "recurringProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShouldSendReminders" }),
        __metadata("design:type", Boolean)
    ], InvoiceUpdateApiModel.prototype, "shouldSendReminders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], InvoiceUpdateApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Terms" }),
        __metadata("design:type", String)
    ], InvoiceUpdateApiModel.prototype, "terms", void 0);
    return InvoiceUpdateApiModel;
}(SpeakeasyBase));
export { InvoiceUpdateApiModel };
