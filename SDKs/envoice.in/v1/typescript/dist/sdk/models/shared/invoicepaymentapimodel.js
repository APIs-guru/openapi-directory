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
export var InvoicePaymentApiModelTypeEnum;
(function (InvoicePaymentApiModelTypeEnum) {
    InvoicePaymentApiModelTypeEnum["Other"] = "Other";
    InvoicePaymentApiModelTypeEnum["Paypal"] = "Paypal";
    InvoicePaymentApiModelTypeEnum["Stripe"] = "Stripe";
    InvoicePaymentApiModelTypeEnum["Payoneer"] = "Payoneer";
    InvoicePaymentApiModelTypeEnum["Bank"] = "Bank";
    InvoicePaymentApiModelTypeEnum["Cash"] = "Cash";
    InvoicePaymentApiModelTypeEnum["Cheque"] = "Cheque";
    InvoicePaymentApiModelTypeEnum["Ach"] = "Ach";
    InvoicePaymentApiModelTypeEnum["Sepa"] = "Sepa";
    InvoicePaymentApiModelTypeEnum["Square"] = "Square";
    InvoicePaymentApiModelTypeEnum["KlikAndPay"] = "KlikAndPay";
    InvoicePaymentApiModelTypeEnum["Razorpay"] = "Razorpay";
    InvoicePaymentApiModelTypeEnum["Wepay"] = "Wepay";
    InvoicePaymentApiModelTypeEnum["Halkbank"] = "Halkbank";
    InvoicePaymentApiModelTypeEnum["TwoCheckout"] = "TwoCheckout";
    InvoicePaymentApiModelTypeEnum["PaymentWall"] = "PaymentWall";
    InvoicePaymentApiModelTypeEnum["BamboraEu"] = "BamboraEU";
    InvoicePaymentApiModelTypeEnum["BamboraNa"] = "BamboraNA";
    InvoicePaymentApiModelTypeEnum["Nlb"] = "Nlb";
    InvoicePaymentApiModelTypeEnum["AuthorizeNet"] = "AuthorizeNet";
    InvoicePaymentApiModelTypeEnum["Braintree"] = "Braintree";
})(InvoicePaymentApiModelTypeEnum || (InvoicePaymentApiModelTypeEnum = {}));
var InvoicePaymentApiModel = /** @class */ (function (_super) {
    __extends(InvoicePaymentApiModel, _super);
    function InvoicePaymentApiModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", Number)
    ], InvoicePaymentApiModel.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], InvoicePaymentApiModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsAutomatic" }),
        __metadata("design:type", Boolean)
    ], InvoicePaymentApiModel.prototype, "isAutomatic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Note" }),
        __metadata("design:type", String)
    ], InvoicePaymentApiModel.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaidOn" }),
        __metadata("design:type", Date)
    ], InvoicePaymentApiModel.prototype, "paidOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReferenceId" }),
        __metadata("design:type", String)
    ], InvoicePaymentApiModel.prototype, "referenceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], InvoicePaymentApiModel.prototype, "type", void 0);
    return InvoicePaymentApiModel;
}(SpeakeasyBase));
export { InvoicePaymentApiModel };
