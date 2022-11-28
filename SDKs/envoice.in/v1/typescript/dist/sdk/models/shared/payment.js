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
import { Invoice } from "./invoice";
export var PaymentTypeEnum;
(function (PaymentTypeEnum) {
    PaymentTypeEnum["Other"] = "Other";
    PaymentTypeEnum["Paypal"] = "Paypal";
    PaymentTypeEnum["Stripe"] = "Stripe";
    PaymentTypeEnum["Payoneer"] = "Payoneer";
    PaymentTypeEnum["Bank"] = "Bank";
    PaymentTypeEnum["Cash"] = "Cash";
    PaymentTypeEnum["Cheque"] = "Cheque";
    PaymentTypeEnum["Ach"] = "Ach";
    PaymentTypeEnum["Sepa"] = "Sepa";
    PaymentTypeEnum["Square"] = "Square";
    PaymentTypeEnum["KlikAndPay"] = "KlikAndPay";
    PaymentTypeEnum["Razorpay"] = "Razorpay";
    PaymentTypeEnum["Wepay"] = "Wepay";
    PaymentTypeEnum["Halkbank"] = "Halkbank";
    PaymentTypeEnum["TwoCheckout"] = "TwoCheckout";
    PaymentTypeEnum["PaymentWall"] = "PaymentWall";
    PaymentTypeEnum["BamboraEu"] = "BamboraEU";
    PaymentTypeEnum["BamboraNa"] = "BamboraNA";
    PaymentTypeEnum["Nlb"] = "Nlb";
    PaymentTypeEnum["AuthorizeNet"] = "AuthorizeNet";
    PaymentTypeEnum["Braintree"] = "Braintree";
})(PaymentTypeEnum || (PaymentTypeEnum = {}));
var Payment = /** @class */ (function (_super) {
    __extends(Payment, _super);
    function Payment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", Number)
    ], Payment.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], Payment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Invoice" }),
        __metadata("design:type", Invoice)
    ], Payment.prototype, "invoice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InvoiceId" }),
        __metadata("design:type", Number)
    ], Payment.prototype, "invoiceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAutomatic" }),
        __metadata("design:type", Boolean)
    ], Payment.prototype, "isAutomatic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Note" }),
        __metadata("design:type", String)
    ], Payment.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaidOn" }),
        __metadata("design:type", Date)
    ], Payment.prototype, "paidOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReferenceId" }),
        __metadata("design:type", String)
    ], Payment.prototype, "referenceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], Payment.prototype, "type", void 0);
    return Payment;
}(SpeakeasyBase));
export { Payment };
