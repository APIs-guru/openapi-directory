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
import { MarketplaceAccount } from "./marketplaceaccount";
import { MarketplaceListingPlan } from "./marketplacelistingplan";
// UserMarketplacePurchase
/**
 * User Marketplace Purchase
**/
var UserMarketplacePurchase = /** @class */ (function (_super) {
    __extends(UserMarketplacePurchase, _super);
    function UserMarketplacePurchase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account" }),
        __metadata("design:type", MarketplaceAccount)
    ], UserMarketplacePurchase.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billing_cycle" }),
        __metadata("design:type", String)
    ], UserMarketplacePurchase.prototype, "billingCycle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=free_trial_ends_on" }),
        __metadata("design:type", Date)
    ], UserMarketplacePurchase.prototype, "freeTrialEndsOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_billing_date" }),
        __metadata("design:type", Date)
    ], UserMarketplacePurchase.prototype, "nextBillingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=on_free_trial" }),
        __metadata("design:type", Boolean)
    ], UserMarketplacePurchase.prototype, "onFreeTrial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plan" }),
        __metadata("design:type", MarketplaceListingPlan)
    ], UserMarketplacePurchase.prototype, "plan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit_count" }),
        __metadata("design:type", Number)
    ], UserMarketplacePurchase.prototype, "unitCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], UserMarketplacePurchase.prototype, "updatedAt", void 0);
    return UserMarketplacePurchase;
}(SpeakeasyBase));
export { UserMarketplacePurchase };
