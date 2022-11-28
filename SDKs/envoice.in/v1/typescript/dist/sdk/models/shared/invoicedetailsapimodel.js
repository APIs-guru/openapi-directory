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
import { ClientDetailsApiModel } from "./clientdetailsapimodel";
import { CurrencyDetailsApiModel } from "./currencydetailsapimodel";
import { InvoiceRecurringApiModel } from "./invoicerecurringapimodel";
export var InvoiceDetailsApiModelStatusEnum;
(function (InvoiceDetailsApiModelStatusEnum) {
    InvoiceDetailsApiModelStatusEnum["Draft"] = "Draft";
    InvoiceDetailsApiModelStatusEnum["Paid"] = "Paid";
    InvoiceDetailsApiModelStatusEnum["Unpaid"] = "Unpaid";
    InvoiceDetailsApiModelStatusEnum["Overdue"] = "Overdue";
    InvoiceDetailsApiModelStatusEnum["Void"] = "Void";
})(InvoiceDetailsApiModelStatusEnum || (InvoiceDetailsApiModelStatusEnum = {}));
var InvoiceDetailsApiModel = /** @class */ (function (_super) {
    __extends(InvoiceDetailsApiModel, _super);
    function InvoiceDetailsApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessToken" }),
        __metadata("design:type", String)
    ], InvoiceDetailsApiModel.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Client" }),
        __metadata("design:type", ClientDetailsApiModel)
    ], InvoiceDetailsApiModel.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClonedFromId" }),
        __metadata("design:type", Number)
    ], InvoiceDetailsApiModel.prototype, "clonedFromId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", CurrencyDetailsApiModel)
    ], InvoiceDetailsApiModel.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DiscountAmount" }),
        __metadata("design:type", Number)
    ], InvoiceDetailsApiModel.prototype, "discountAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Duedate" }),
        __metadata("design:type", Date)
    ], InvoiceDetailsApiModel.prototype, "duedate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EnablePartialPayments" }),
        __metadata("design:type", Boolean)
    ], InvoiceDetailsApiModel.prototype, "enablePartialPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], InvoiceDetailsApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvoiceCategoryId" }),
        __metadata("design:type", Number)
    ], InvoiceDetailsApiModel.prototype, "invoiceCategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssuedOn" }),
        __metadata("design:type", Date)
    ], InvoiceDetailsApiModel.prototype, "issuedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], InvoiceDetailsApiModel.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Number" }),
        __metadata("design:type", String)
    ], InvoiceDetailsApiModel.prototype, "number", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PoNumber" }),
        __metadata("design:type", String)
    ], InvoiceDetailsApiModel.prototype, "poNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringProfile" }),
        __metadata("design:type", InvoiceRecurringApiModel)
    ], InvoiceDetailsApiModel.prototype, "recurringProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringProfileId" }),
        __metadata("design:type", Number)
    ], InvoiceDetailsApiModel.prototype, "recurringProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShouldSendReminders" }),
        __metadata("design:type", Boolean)
    ], InvoiceDetailsApiModel.prototype, "shouldSendReminders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], InvoiceDetailsApiModel.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SubTotalAmount" }),
        __metadata("design:type", Number)
    ], InvoiceDetailsApiModel.prototype, "subTotalAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TaxAmount" }),
        __metadata("design:type", Number)
    ], InvoiceDetailsApiModel.prototype, "taxAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Terms" }),
        __metadata("design:type", String)
    ], InvoiceDetailsApiModel.prototype, "terms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalAmount" }),
        __metadata("design:type", Number)
    ], InvoiceDetailsApiModel.prototype, "totalAmount", void 0);
    return InvoiceDetailsApiModel;
}(SpeakeasyBase));
export { InvoiceDetailsApiModel };
