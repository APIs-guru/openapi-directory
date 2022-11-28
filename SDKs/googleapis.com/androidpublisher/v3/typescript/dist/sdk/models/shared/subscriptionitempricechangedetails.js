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
import { Money } from "./money";
export var SubscriptionItemPriceChangeDetailsPriceChangeModeEnum;
(function (SubscriptionItemPriceChangeDetailsPriceChangeModeEnum) {
    SubscriptionItemPriceChangeDetailsPriceChangeModeEnum["PriceChangeModeUnspecified"] = "PRICE_CHANGE_MODE_UNSPECIFIED";
    SubscriptionItemPriceChangeDetailsPriceChangeModeEnum["PriceDecrease"] = "PRICE_DECREASE";
    SubscriptionItemPriceChangeDetailsPriceChangeModeEnum["PriceIncrease"] = "PRICE_INCREASE";
})(SubscriptionItemPriceChangeDetailsPriceChangeModeEnum || (SubscriptionItemPriceChangeDetailsPriceChangeModeEnum = {}));
export var SubscriptionItemPriceChangeDetailsPriceChangeStateEnum;
(function (SubscriptionItemPriceChangeDetailsPriceChangeStateEnum) {
    SubscriptionItemPriceChangeDetailsPriceChangeStateEnum["PriceChangeStateUnspecified"] = "PRICE_CHANGE_STATE_UNSPECIFIED";
    SubscriptionItemPriceChangeDetailsPriceChangeStateEnum["Outstanding"] = "OUTSTANDING";
    SubscriptionItemPriceChangeDetailsPriceChangeStateEnum["Confirmed"] = "CONFIRMED";
    SubscriptionItemPriceChangeDetailsPriceChangeStateEnum["Applied"] = "APPLIED";
})(SubscriptionItemPriceChangeDetailsPriceChangeStateEnum || (SubscriptionItemPriceChangeDetailsPriceChangeStateEnum = {}));
// SubscriptionItemPriceChangeDetails
/**
 * Price change related information of a subscription item.
**/
var SubscriptionItemPriceChangeDetails = /** @class */ (function (_super) {
    __extends(SubscriptionItemPriceChangeDetails, _super);
    function SubscriptionItemPriceChangeDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expectedNewPriceChargeTime" }),
        __metadata("design:type", String)
    ], SubscriptionItemPriceChangeDetails.prototype, "expectedNewPriceChargeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newPrice" }),
        __metadata("design:type", Money)
    ], SubscriptionItemPriceChangeDetails.prototype, "newPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceChangeMode" }),
        __metadata("design:type", String)
    ], SubscriptionItemPriceChangeDetails.prototype, "priceChangeMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priceChangeState" }),
        __metadata("design:type", String)
    ], SubscriptionItemPriceChangeDetails.prototype, "priceChangeState", void 0);
    return SubscriptionItemPriceChangeDetails;
}(SpeakeasyBase));
export { SubscriptionItemPriceChangeDetails };
