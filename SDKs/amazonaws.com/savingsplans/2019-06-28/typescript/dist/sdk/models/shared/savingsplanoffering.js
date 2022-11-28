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
// SavingsPlanOffering
/**
 * Information about a Savings Plan offering.
**/
var SavingsPlanOffering = /** @class */ (function (_super) {
    __extends(SavingsPlanOffering, _super);
    function SavingsPlanOffering() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], SavingsPlanOffering.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], SavingsPlanOffering.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationSeconds" }),
        __metadata("design:type", Number)
    ], SavingsPlanOffering.prototype, "durationSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offeringId" }),
        __metadata("design:type", String)
    ], SavingsPlanOffering.prototype, "offeringId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], SavingsPlanOffering.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paymentOption" }),
        __metadata("design:type", String)
    ], SavingsPlanOffering.prototype, "paymentOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planType" }),
        __metadata("design:type", String)
    ], SavingsPlanOffering.prototype, "planType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productTypes" }),
        __metadata("design:type", Array)
    ], SavingsPlanOffering.prototype, "productTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", Object)
    ], SavingsPlanOffering.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceCode" }),
        __metadata("design:type", String)
    ], SavingsPlanOffering.prototype, "serviceCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usageType" }),
        __metadata("design:type", String)
    ], SavingsPlanOffering.prototype, "usageType", void 0);
    return SavingsPlanOffering;
}(SpeakeasyBase));
export { SavingsPlanOffering };
