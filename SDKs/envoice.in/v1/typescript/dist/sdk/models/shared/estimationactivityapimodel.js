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
export var EstimationActivityApiModelTypeEnum;
(function (EstimationActivityApiModelTypeEnum) {
    EstimationActivityApiModelTypeEnum["Created"] = "Created";
    EstimationActivityApiModelTypeEnum["Draft"] = "Draft";
    EstimationActivityApiModelTypeEnum["Cloned"] = "Cloned";
    EstimationActivityApiModelTypeEnum["SentViaEmail"] = "SentViaEmail";
    EstimationActivityApiModelTypeEnum["SentViaSms"] = "SentViaSms";
    EstimationActivityApiModelTypeEnum["SentReminderViaEmail"] = "SentReminderViaEmail";
    EstimationActivityApiModelTypeEnum["SentReminderViaSms"] = "SentReminderViaSms";
    EstimationActivityApiModelTypeEnum["Opened"] = "Opened";
    EstimationActivityApiModelTypeEnum["Viewed"] = "Viewed";
    EstimationActivityApiModelTypeEnum["Rejected"] = "Rejected";
    EstimationActivityApiModelTypeEnum["Updated"] = "Updated";
    EstimationActivityApiModelTypeEnum["Paid"] = "Paid";
    EstimationActivityApiModelTypeEnum["Unpaid"] = "Unpaid";
    EstimationActivityApiModelTypeEnum["Overdue"] = "Overdue";
    EstimationActivityApiModelTypeEnum["NewManualPayment"] = "NewManualPayment";
    EstimationActivityApiModelTypeEnum["NewPaymentWithPaypal"] = "NewPaymentWithPaypal";
    EstimationActivityApiModelTypeEnum["NewPaymentWithStripe"] = "NewPaymentWithStripe";
    EstimationActivityApiModelTypeEnum["NewPaymentWithPayoneer"] = "NewPaymentWithPayoneer";
    EstimationActivityApiModelTypeEnum["SentToAccountant"] = "SentToAccountant";
    EstimationActivityApiModelTypeEnum["DownloadedAsPdf"] = "DownloadedAsPdf";
    EstimationActivityApiModelTypeEnum["MarkAsPaidByTheClient"] = "MarkAsPaidByTheClient";
    EstimationActivityApiModelTypeEnum["OpenedAttachment"] = "OpenedAttachment";
    EstimationActivityApiModelTypeEnum["NewPaymentWithSquare"] = "NewPaymentWithSquare";
    EstimationActivityApiModelTypeEnum["NewPaymentWithKlikAndPay"] = "NewPaymentWithKlikAndPay";
    EstimationActivityApiModelTypeEnum["NewPaymentWithRazorpay"] = "NewPaymentWithRazorpay";
    EstimationActivityApiModelTypeEnum["NewPaymentWithWepay"] = "NewPaymentWithWepay";
    EstimationActivityApiModelTypeEnum["NewPaymentWithHalkbank"] = "NewPaymentWithHalkbank";
    EstimationActivityApiModelTypeEnum["ChangeStatus"] = "ChangeStatus";
    EstimationActivityApiModelTypeEnum["OrderUpdated"] = "OrderUpdated";
    EstimationActivityApiModelTypeEnum["OrderCreated"] = "OrderCreated";
    EstimationActivityApiModelTypeEnum["NewPaymentWithTwoCheckout"] = "NewPaymentWithTwoCheckout";
    EstimationActivityApiModelTypeEnum["NewPaymentWithPaymentWall"] = "NewPaymentWithPaymentWall";
    EstimationActivityApiModelTypeEnum["NewPaymentWithBamboraEu"] = "NewPaymentWithBamboraEU";
    EstimationActivityApiModelTypeEnum["NewPaymentWithBamboraNa"] = "NewPaymentWithBamboraNA";
    EstimationActivityApiModelTypeEnum["Void"] = "Void";
    EstimationActivityApiModelTypeEnum["NewPaymentWithNlb"] = "NewPaymentWithNlb";
    EstimationActivityApiModelTypeEnum["NewPaymentWithAuthorizeNet"] = "NewPaymentWithAuthorizeNet";
    EstimationActivityApiModelTypeEnum["NewPaymentWithBraintree"] = "NewPaymentWithBraintree";
    EstimationActivityApiModelTypeEnum["EstimationCreated"] = "EstimationCreated";
    EstimationActivityApiModelTypeEnum["EstimationDraft"] = "EstimationDraft";
    EstimationActivityApiModelTypeEnum["EstimationCloned"] = "EstimationCloned";
    EstimationActivityApiModelTypeEnum["EstimationSentViaEmail"] = "EstimationSentViaEmail";
    EstimationActivityApiModelTypeEnum["EstimationOpened"] = "EstimationOpened";
    EstimationActivityApiModelTypeEnum["EstimationViewed"] = "EstimationViewed";
    EstimationActivityApiModelTypeEnum["EstimationAccepted"] = "EstimationAccepted";
    EstimationActivityApiModelTypeEnum["EstimationRejected"] = "EstimationRejected";
    EstimationActivityApiModelTypeEnum["EstimationUpdated"] = "EstimationUpdated";
    EstimationActivityApiModelTypeEnum["EstimationDownloadedAsPdf"] = "EstimationDownloadedAsPdf";
})(EstimationActivityApiModelTypeEnum || (EstimationActivityApiModelTypeEnum = {}));
var EstimationActivityApiModel = /** @class */ (function (_super) {
    __extends(EstimationActivityApiModel, _super);
    function EstimationActivityApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EstimationNumber" }),
        __metadata("design:type", String)
    ], EstimationActivityApiModel.prototype, "estimationNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], EstimationActivityApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Link" }),
        __metadata("design:type", String)
    ], EstimationActivityApiModel.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Message" }),
        __metadata("design:type", String)
    ], EstimationActivityApiModel.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], EstimationActivityApiModel.prototype, "type", void 0);
    return EstimationActivityApiModel;
}(SpeakeasyBase));
export { EstimationActivityApiModel };
