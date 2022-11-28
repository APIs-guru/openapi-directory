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
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanPaymentOptionEnum } from "./savingsplanpaymentoptionenum";
import { SavingsPlanTypeEnum } from "./savingsplantypeenum";
import { SavingsPlanStateEnum } from "./savingsplanstateenum";
// SavingsPlan
/**
 * Information about a Savings Plan.
**/
var SavingsPlan = /** @class */ (function (_super) {
    __extends(SavingsPlan, _super);
    function SavingsPlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commitment" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "commitment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ec2InstanceFamily" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "ec2InstanceFamily", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offeringId" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "offeringId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentOption" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "paymentOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTypes" }),
        __metadata("design:type", Array)
    ], SavingsPlan.prototype, "productTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recurringPaymentAmount" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "recurringPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingsPlanArn" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "savingsPlanArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingsPlanId" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "savingsPlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=savingsPlanType" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "savingsPlanType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Map)
    ], SavingsPlan.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termDurationInSeconds" }),
        __metadata("design:type", Number)
    ], SavingsPlan.prototype, "termDurationInSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upfrontPaymentAmount" }),
        __metadata("design:type", String)
    ], SavingsPlan.prototype, "upfrontPaymentAmount", void 0);
    return SavingsPlan;
}(SpeakeasyBase));
export { SavingsPlan };
