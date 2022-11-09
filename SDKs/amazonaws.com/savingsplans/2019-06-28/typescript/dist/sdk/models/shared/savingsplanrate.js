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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyCodeEnum } from "./currencycodeenum";
import { SavingsPlanProductTypeEnum } from "./savingsplanproducttypeenum";
import { SavingsPlanRateServiceCodeEnum } from "./savingsplanrateservicecodeenum";
import { SavingsPlanRateUnitEnum } from "./savingsplanrateunitenum";
// SavingsPlanRate
/**
 * Information about a Savings Plan rate.
**/
var SavingsPlanRate = /** @class */ (function (_super) {
    __extends(SavingsPlanRate, _super);
    function SavingsPlanRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], SavingsPlanRate.prototype, "currency", void 0);
    __decorate([
        Metadata({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], SavingsPlanRate.prototype, "operation", void 0);
    __decorate([
        Metadata({ data: "json, name=productType" }),
        __metadata("design:type", String)
    ], SavingsPlanRate.prototype, "productType", void 0);
    __decorate([
        Metadata({ data: "json, name=properties" }),
        __metadata("design:type", Object)
    ], SavingsPlanRate.prototype, "properties", void 0);
    __decorate([
        Metadata({ data: "json, name=rate" }),
        __metadata("design:type", String)
    ], SavingsPlanRate.prototype, "rate", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceCode" }),
        __metadata("design:type", String)
    ], SavingsPlanRate.prototype, "serviceCode", void 0);
    __decorate([
        Metadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], SavingsPlanRate.prototype, "unit", void 0);
    __decorate([
        Metadata({ data: "json, name=usageType" }),
        __metadata("design:type", String)
    ], SavingsPlanRate.prototype, "usageType", void 0);
    return SavingsPlanRate;
}(SpeakeasyBase));
export { SavingsPlanRate };
