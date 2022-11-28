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
import { Error } from "./error";
// SetPaymentPolicyResponse
/**
 * Complex type that that gets populated with a response containing a payment policy.
**/
var SetPaymentPolicyResponse = /** @class */ (function (_super) {
    __extends(SetPaymentPolicyResponse, _super);
    function SetPaymentPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryTypes", elemType: CategoryType }),
        __metadata("design:type", Array)
    ], SetPaymentPolicyResponse.prototype, "categoryTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deposit" }),
        __metadata("design:type", Deposit)
    ], SetPaymentPolicyResponse.prototype, "deposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SetPaymentPolicyResponse.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullPaymentDueIn" }),
        __metadata("design:type", TimeDuration)
    ], SetPaymentPolicyResponse.prototype, "fullPaymentDueIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=immediatePay" }),
        __metadata("design:type", Boolean)
    ], SetPaymentPolicyResponse.prototype, "immediatePay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marketplaceId" }),
        __metadata("design:type", String)
    ], SetPaymentPolicyResponse.prototype, "marketplaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SetPaymentPolicyResponse.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentInstructions" }),
        __metadata("design:type", String)
    ], SetPaymentPolicyResponse.prototype, "paymentInstructions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentMethods", elemType: PaymentMethod }),
        __metadata("design:type", Array)
    ], SetPaymentPolicyResponse.prototype, "paymentMethods", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentPolicyId" }),
        __metadata("design:type", String)
    ], SetPaymentPolicyResponse.prototype, "paymentPolicyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error }),
        __metadata("design:type", Array)
    ], SetPaymentPolicyResponse.prototype, "warnings", void 0);
    return SetPaymentPolicyResponse;
}(SpeakeasyBase));
export { SetPaymentPolicyResponse };
