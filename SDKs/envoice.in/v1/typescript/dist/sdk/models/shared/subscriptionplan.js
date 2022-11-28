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
export var SubscriptionPlanFeaturesEnum;
(function (SubscriptionPlanFeaturesEnum) {
    SubscriptionPlanFeaturesEnum["Api"] = "Api";
    SubscriptionPlanFeaturesEnum["Teams"] = "Teams";
    SubscriptionPlanFeaturesEnum["Clients"] = "Clients";
    SubscriptionPlanFeaturesEnum["Shop"] = "Shop";
    SubscriptionPlanFeaturesEnum["PaymentLinks"] = "PaymentLinks";
    SubscriptionPlanFeaturesEnum["Cname"] = "Cname";
})(SubscriptionPlanFeaturesEnum || (SubscriptionPlanFeaturesEnum = {}));
export var SubscriptionPlanRecurrenceEnum;
(function (SubscriptionPlanRecurrenceEnum) {
    SubscriptionPlanRecurrenceEnum["Monthly"] = "Monthly";
    SubscriptionPlanRecurrenceEnum["Yearly"] = "Yearly";
})(SubscriptionPlanRecurrenceEnum || (SubscriptionPlanRecurrenceEnum = {}));
export var SubscriptionPlanStatusEnum;
(function (SubscriptionPlanStatusEnum) {
    SubscriptionPlanStatusEnum["ActiveTrial"] = "ActiveTrial";
    SubscriptionPlanStatusEnum["ExpiredTrial"] = "ExpiredTrial";
    SubscriptionPlanStatusEnum["Active"] = "Active";
    SubscriptionPlanStatusEnum["Canceled"] = "Canceled";
    SubscriptionPlanStatusEnum["Fraudlent"] = "Fraudlent";
})(SubscriptionPlanStatusEnum || (SubscriptionPlanStatusEnum = {}));
export var SubscriptionPlanSystemCancelationReasonEnum;
(function (SubscriptionPlanSystemCancelationReasonEnum) {
    SubscriptionPlanSystemCancelationReasonEnum["FailToCaptureFee"] = "FailToCaptureFee";
    SubscriptionPlanSystemCancelationReasonEnum["Fraud"] = "Fraud";
})(SubscriptionPlanSystemCancelationReasonEnum || (SubscriptionPlanSystemCancelationReasonEnum = {}));
var SubscriptionPlan = /** @class */ (function (_super) {
    __extends(SubscriptionPlan, _super);
    function SubscriptionPlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CancellatedOn" }),
        __metadata("design:type", Date)
    ], SubscriptionPlan.prototype, "cancellatedOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CouponCode" }),
        __metadata("design:type", String)
    ], SubscriptionPlan.prototype, "couponCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyCode" }),
        __metadata("design:type", String)
    ], SubscriptionPlan.prototype, "currencyCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExternalIdentifier" }),
        __metadata("design:type", String)
    ], SubscriptionPlan.prototype, "externalIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Features" }),
        __metadata("design:type", Array)
    ], SubscriptionPlan.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasDuePayment" }),
        __metadata("design:type", Boolean)
    ], SubscriptionPlan.prototype, "hasDuePayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasDuePaymentSince" }),
        __metadata("design:type", Date)
    ], SubscriptionPlan.prototype, "hasDuePaymentSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", Number)
    ], SubscriptionPlan.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identifier" }),
        __metadata("design:type", String)
    ], SubscriptionPlan.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsActive" }),
        __metadata("design:type", Boolean)
    ], SubscriptionPlan.prototype, "isActive", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsLifetime" }),
        __metadata("design:type", Boolean)
    ], SubscriptionPlan.prototype, "isLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastPaymentOn" }),
        __metadata("design:type", Date)
    ], SubscriptionPlan.prototype, "lastPaymentOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxClients" }),
        __metadata("design:type", Number)
    ], SubscriptionPlan.prototype, "maxClients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], SubscriptionPlan.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OnHold" }),
        __metadata("design:type", Boolean)
    ], SubscriptionPlan.prototype, "onHold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrderIdentifier" }),
        __metadata("design:type", String)
    ], SubscriptionPlan.prototype, "orderIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Price" }),
        __metadata("design:type", Number)
    ], SubscriptionPlan.prototype, "price", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Recurrence" }),
        __metadata("design:type", String)
    ], SubscriptionPlan.prototype, "recurrence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SaleId" }),
        __metadata("design:type", Number)
    ], SubscriptionPlan.prototype, "saleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], SubscriptionPlan.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SystemCancelationReason" }),
        __metadata("design:type", String)
    ], SubscriptionPlan.prototype, "systemCancelationReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrialEndsOn" }),
        __metadata("design:type", Date)
    ], SubscriptionPlan.prototype, "trialEndsOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrialNumberOfDays" }),
        __metadata("design:type", Number)
    ], SubscriptionPlan.prototype, "trialNumberOfDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrialStartsOn" }),
        __metadata("design:type", Date)
    ], SubscriptionPlan.prototype, "trialStartsOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserId" }),
        __metadata("design:type", Number)
    ], SubscriptionPlan.prototype, "userId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], SubscriptionPlan.prototype, "version", void 0);
    return SubscriptionPlan;
}(SpeakeasyBase));
export { SubscriptionPlan };
