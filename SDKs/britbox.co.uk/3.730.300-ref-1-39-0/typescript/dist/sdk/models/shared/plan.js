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
export var PlanBillingPeriodTypeEnum;
(function (PlanBillingPeriodTypeEnum) {
    PlanBillingPeriodTypeEnum["Day"] = "day";
    PlanBillingPeriodTypeEnum["Week"] = "week";
    PlanBillingPeriodTypeEnum["Month"] = "month";
    PlanBillingPeriodTypeEnum["Year"] = "year";
    PlanBillingPeriodTypeEnum["None"] = "none";
})(PlanBillingPeriodTypeEnum || (PlanBillingPeriodTypeEnum = {}));
export var PlanRevenueTypeEnum;
(function (PlanRevenueTypeEnum) {
    PlanRevenueTypeEnum["Tvod"] = "TVOD";
    PlanRevenueTypeEnum["Svod"] = "SVOD";
})(PlanRevenueTypeEnum || (PlanRevenueTypeEnum = {}));
export var PlanTypeEnum;
(function (PlanTypeEnum) {
    PlanTypeEnum["Free"] = "Free";
    PlanTypeEnum["Subscription"] = "Subscription";
})(PlanTypeEnum || (PlanTypeEnum = {}));
var Plan = /** @class */ (function (_super) {
    __extends(Plan, _super);
    function Plan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alias" }),
        __metadata("design:type", String)
    ], Plan.prototype, "alias", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=benefits" }),
        __metadata("design:type", Array)
    ], Plan.prototype, "benefits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingPeriodFrequency" }),
        __metadata("design:type", Number)
    ], Plan.prototype, "billingPeriodFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingPeriodType" }),
        __metadata("design:type", String)
    ], Plan.prototype, "billingPeriodType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], Plan.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customFields" }),
        __metadata("design:type", Map)
    ], Plan.prototype, "customFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasTrialPeriod" }),
        __metadata("design:type", Boolean)
    ], Plan.prototype, "hasTrialPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Plan.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isActive" }),
        __metadata("design:type", Boolean)
    ], Plan.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFeatured" }),
        __metadata("design:type", Boolean)
    ], Plan.prototype, "isFeatured", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPrivate" }),
        __metadata("design:type", Boolean)
    ], Plan.prototype, "isPrivate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], Plan.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revenueType" }),
        __metadata("design:type", String)
    ], Plan.prototype, "revenueType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptionCode" }),
        __metadata("design:type", String)
    ], Plan.prototype, "subscriptionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagline" }),
        __metadata("design:type", String)
    ], Plan.prototype, "tagline", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=termsAndConditions" }),
        __metadata("design:type", String)
    ], Plan.prototype, "termsAndConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Plan.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trialPeriodDays" }),
        __metadata("design:type", Number)
    ], Plan.prototype, "trialPeriodDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Plan.prototype, "type", void 0);
    return Plan;
}(SpeakeasyBase));
export { Plan };
