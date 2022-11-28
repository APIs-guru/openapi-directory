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
export var ActivityTypeEnum;
(function (ActivityTypeEnum) {
    ActivityTypeEnum["Created"] = "Created";
    ActivityTypeEnum["Draft"] = "Draft";
    ActivityTypeEnum["Cloned"] = "Cloned";
    ActivityTypeEnum["SentViaEmail"] = "SentViaEmail";
    ActivityTypeEnum["SentViaSms"] = "SentViaSms";
    ActivityTypeEnum["SentReminderViaEmail"] = "SentReminderViaEmail";
    ActivityTypeEnum["SentReminderViaSms"] = "SentReminderViaSms";
    ActivityTypeEnum["Opened"] = "Opened";
    ActivityTypeEnum["Viewed"] = "Viewed";
    ActivityTypeEnum["Rejected"] = "Rejected";
    ActivityTypeEnum["Updated"] = "Updated";
    ActivityTypeEnum["Paid"] = "Paid";
    ActivityTypeEnum["Unpaid"] = "Unpaid";
    ActivityTypeEnum["Overdue"] = "Overdue";
    ActivityTypeEnum["NewManualPayment"] = "NewManualPayment";
    ActivityTypeEnum["NewPaymentWithPaypal"] = "NewPaymentWithPaypal";
    ActivityTypeEnum["NewPaymentWithStripe"] = "NewPaymentWithStripe";
    ActivityTypeEnum["NewPaymentWithPayoneer"] = "NewPaymentWithPayoneer";
    ActivityTypeEnum["SentToAccountant"] = "SentToAccountant";
    ActivityTypeEnum["DownloadedAsPdf"] = "DownloadedAsPdf";
    ActivityTypeEnum["MarkAsPaidByTheClient"] = "MarkAsPaidByTheClient";
    ActivityTypeEnum["OpenedAttachment"] = "OpenedAttachment";
    ActivityTypeEnum["NewPaymentWithSquare"] = "NewPaymentWithSquare";
    ActivityTypeEnum["NewPaymentWithKlikAndPay"] = "NewPaymentWithKlikAndPay";
    ActivityTypeEnum["NewPaymentWithRazorpay"] = "NewPaymentWithRazorpay";
    ActivityTypeEnum["NewPaymentWithWepay"] = "NewPaymentWithWepay";
    ActivityTypeEnum["NewPaymentWithHalkbank"] = "NewPaymentWithHalkbank";
    ActivityTypeEnum["ChangeStatus"] = "ChangeStatus";
    ActivityTypeEnum["OrderUpdated"] = "OrderUpdated";
    ActivityTypeEnum["OrderCreated"] = "OrderCreated";
    ActivityTypeEnum["NewPaymentWithTwoCheckout"] = "NewPaymentWithTwoCheckout";
    ActivityTypeEnum["NewPaymentWithPaymentWall"] = "NewPaymentWithPaymentWall";
    ActivityTypeEnum["NewPaymentWithBamboraEu"] = "NewPaymentWithBamboraEU";
    ActivityTypeEnum["NewPaymentWithBamboraNa"] = "NewPaymentWithBamboraNA";
    ActivityTypeEnum["Void"] = "Void";
    ActivityTypeEnum["NewPaymentWithNlb"] = "NewPaymentWithNlb";
    ActivityTypeEnum["NewPaymentWithAuthorizeNet"] = "NewPaymentWithAuthorizeNet";
    ActivityTypeEnum["NewPaymentWithBraintree"] = "NewPaymentWithBraintree";
    ActivityTypeEnum["EstimationCreated"] = "EstimationCreated";
    ActivityTypeEnum["EstimationDraft"] = "EstimationDraft";
    ActivityTypeEnum["EstimationCloned"] = "EstimationCloned";
    ActivityTypeEnum["EstimationSentViaEmail"] = "EstimationSentViaEmail";
    ActivityTypeEnum["EstimationOpened"] = "EstimationOpened";
    ActivityTypeEnum["EstimationViewed"] = "EstimationViewed";
    ActivityTypeEnum["EstimationAccepted"] = "EstimationAccepted";
    ActivityTypeEnum["EstimationRejected"] = "EstimationRejected";
    ActivityTypeEnum["EstimationUpdated"] = "EstimationUpdated";
    ActivityTypeEnum["EstimationDownloadedAsPdf"] = "EstimationDownloadedAsPdf";
})(ActivityTypeEnum || (ActivityTypeEnum = {}));
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EstimationId" }),
        __metadata("design:type", Number)
    ], Activity.prototype, "estimationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EstimationNumber" }),
        __metadata("design:type", String)
    ], Activity.prototype, "estimationNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], Activity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvoiceId" }),
        __metadata("design:type", Number)
    ], Activity.prototype, "invoiceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvoiceNumber" }),
        __metadata("design:type", String)
    ], Activity.prototype, "invoiceNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Link" }),
        __metadata("design:type", String)
    ], Activity.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], Activity.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderId" }),
        __metadata("design:type", Number)
    ], Activity.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderNumber" }),
        __metadata("design:type", String)
    ], Activity.prototype, "orderNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], Activity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", Number)
    ], Activity.prototype, "userId", void 0);
    return Activity;
}(SpeakeasyBase));
export { Activity };
