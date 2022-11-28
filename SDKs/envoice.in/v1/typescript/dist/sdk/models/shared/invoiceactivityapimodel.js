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
export var InvoiceActivityApiModelTypeEnum;
(function (InvoiceActivityApiModelTypeEnum) {
    InvoiceActivityApiModelTypeEnum["Created"] = "Created";
    InvoiceActivityApiModelTypeEnum["Draft"] = "Draft";
    InvoiceActivityApiModelTypeEnum["Cloned"] = "Cloned";
    InvoiceActivityApiModelTypeEnum["SentViaEmail"] = "SentViaEmail";
    InvoiceActivityApiModelTypeEnum["SentViaSms"] = "SentViaSms";
    InvoiceActivityApiModelTypeEnum["SentReminderViaEmail"] = "SentReminderViaEmail";
    InvoiceActivityApiModelTypeEnum["SentReminderViaSms"] = "SentReminderViaSms";
    InvoiceActivityApiModelTypeEnum["Opened"] = "Opened";
    InvoiceActivityApiModelTypeEnum["Viewed"] = "Viewed";
    InvoiceActivityApiModelTypeEnum["Rejected"] = "Rejected";
    InvoiceActivityApiModelTypeEnum["Updated"] = "Updated";
    InvoiceActivityApiModelTypeEnum["Paid"] = "Paid";
    InvoiceActivityApiModelTypeEnum["Unpaid"] = "Unpaid";
    InvoiceActivityApiModelTypeEnum["Overdue"] = "Overdue";
    InvoiceActivityApiModelTypeEnum["NewManualPayment"] = "NewManualPayment";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithPaypal"] = "NewPaymentWithPaypal";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithStripe"] = "NewPaymentWithStripe";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithPayoneer"] = "NewPaymentWithPayoneer";
    InvoiceActivityApiModelTypeEnum["SentToAccountant"] = "SentToAccountant";
    InvoiceActivityApiModelTypeEnum["DownloadedAsPdf"] = "DownloadedAsPdf";
    InvoiceActivityApiModelTypeEnum["MarkAsPaidByTheClient"] = "MarkAsPaidByTheClient";
    InvoiceActivityApiModelTypeEnum["OpenedAttachment"] = "OpenedAttachment";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithSquare"] = "NewPaymentWithSquare";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithKlikAndPay"] = "NewPaymentWithKlikAndPay";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithRazorpay"] = "NewPaymentWithRazorpay";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithWepay"] = "NewPaymentWithWepay";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithHalkbank"] = "NewPaymentWithHalkbank";
    InvoiceActivityApiModelTypeEnum["ChangeStatus"] = "ChangeStatus";
    InvoiceActivityApiModelTypeEnum["OrderUpdated"] = "OrderUpdated";
    InvoiceActivityApiModelTypeEnum["OrderCreated"] = "OrderCreated";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithTwoCheckout"] = "NewPaymentWithTwoCheckout";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithPaymentWall"] = "NewPaymentWithPaymentWall";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithBamboraEu"] = "NewPaymentWithBamboraEU";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithBamboraNa"] = "NewPaymentWithBamboraNA";
    InvoiceActivityApiModelTypeEnum["Void"] = "Void";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithNlb"] = "NewPaymentWithNlb";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithAuthorizeNet"] = "NewPaymentWithAuthorizeNet";
    InvoiceActivityApiModelTypeEnum["NewPaymentWithBraintree"] = "NewPaymentWithBraintree";
    InvoiceActivityApiModelTypeEnum["EstimationCreated"] = "EstimationCreated";
    InvoiceActivityApiModelTypeEnum["EstimationDraft"] = "EstimationDraft";
    InvoiceActivityApiModelTypeEnum["EstimationCloned"] = "EstimationCloned";
    InvoiceActivityApiModelTypeEnum["EstimationSentViaEmail"] = "EstimationSentViaEmail";
    InvoiceActivityApiModelTypeEnum["EstimationOpened"] = "EstimationOpened";
    InvoiceActivityApiModelTypeEnum["EstimationViewed"] = "EstimationViewed";
    InvoiceActivityApiModelTypeEnum["EstimationAccepted"] = "EstimationAccepted";
    InvoiceActivityApiModelTypeEnum["EstimationRejected"] = "EstimationRejected";
    InvoiceActivityApiModelTypeEnum["EstimationUpdated"] = "EstimationUpdated";
    InvoiceActivityApiModelTypeEnum["EstimationDownloadedAsPdf"] = "EstimationDownloadedAsPdf";
})(InvoiceActivityApiModelTypeEnum || (InvoiceActivityApiModelTypeEnum = {}));
var InvoiceActivityApiModel = /** @class */ (function (_super) {
    __extends(InvoiceActivityApiModel, _super);
    function InvoiceActivityApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], InvoiceActivityApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvoiceNumber" }),
        __metadata("design:type", String)
    ], InvoiceActivityApiModel.prototype, "invoiceNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Link" }),
        __metadata("design:type", String)
    ], InvoiceActivityApiModel.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], InvoiceActivityApiModel.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], InvoiceActivityApiModel.prototype, "type", void 0);
    return InvoiceActivityApiModel;
}(SpeakeasyBase));
export { InvoiceActivityApiModel };
