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
import { CategoryType } from "./categorytype";
import { Deposit } from "./deposit";
import { TimeDuration } from "./timeduration";
import { PaymentMethod } from "./paymentmethod";
// PaymentPolicy
/**
 * Root container that defines the fields for a seller's payment policy. The paymentPolicy encapsulates a seller's payment terms and consists of payment details for the seller, the name and description of the policy, and the marketplace and category group(s) covered by the payment policy. While each seller must define at least one payment policy for every marketplace into which they sell, sellers can define multiple payment policies for a single marketplace by specifying different configurations for the unique policies.
**/
var PaymentPolicy = /** @class */ (function (_super) {
    __extends(PaymentPolicy, _super);
    function PaymentPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryTypes", elemType: CategoryType }),
        __metadata("design:type", Array)
    ], PaymentPolicy.prototype, "categoryTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deposit" }),
        __metadata("design:type", Deposit)
    ], PaymentPolicy.prototype, "deposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PaymentPolicy.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullPaymentDueIn" }),
        __metadata("design:type", TimeDuration)
    ], PaymentPolicy.prototype, "fullPaymentDueIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=immediatePay" }),
        __metadata("design:type", Boolean)
    ], PaymentPolicy.prototype, "immediatePay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketplaceId" }),
        __metadata("design:type", String)
    ], PaymentPolicy.prototype, "marketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PaymentPolicy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentInstructions" }),
        __metadata("design:type", String)
    ], PaymentPolicy.prototype, "paymentInstructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentMethods", elemType: PaymentMethod }),
        __metadata("design:type", Array)
    ], PaymentPolicy.prototype, "paymentMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentPolicyId" }),
        __metadata("design:type", String)
    ], PaymentPolicy.prototype, "paymentPolicyId", void 0);
    return PaymentPolicy;
}(SpeakeasyBase));
export { PaymentPolicy };
