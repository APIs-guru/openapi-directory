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
import { CanceledStateContext } from "./canceledstatecontext";
import { ExternalAccountIdentifiers } from "./externalaccountidentifiers";
import { SubscriptionPurchaseLineItem } from "./subscriptionpurchaselineitem";
import { PausedStateContext } from "./pausedstatecontext";
import { SubscribeWithGoogleInfo } from "./subscribewithgoogleinfo";
export var SubscriptionPurchaseV2AcknowledgementStateEnum;
(function (SubscriptionPurchaseV2AcknowledgementStateEnum) {
    SubscriptionPurchaseV2AcknowledgementStateEnum["AcknowledgementStateUnspecified"] = "ACKNOWLEDGEMENT_STATE_UNSPECIFIED";
    SubscriptionPurchaseV2AcknowledgementStateEnum["AcknowledgementStatePending"] = "ACKNOWLEDGEMENT_STATE_PENDING";
    SubscriptionPurchaseV2AcknowledgementStateEnum["AcknowledgementStateAcknowledged"] = "ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED";
})(SubscriptionPurchaseV2AcknowledgementStateEnum || (SubscriptionPurchaseV2AcknowledgementStateEnum = {}));
export var SubscriptionPurchaseV2SubscriptionStateEnum;
(function (SubscriptionPurchaseV2SubscriptionStateEnum) {
    SubscriptionPurchaseV2SubscriptionStateEnum["SubscriptionStateUnspecified"] = "SUBSCRIPTION_STATE_UNSPECIFIED";
    SubscriptionPurchaseV2SubscriptionStateEnum["SubscriptionStatePending"] = "SUBSCRIPTION_STATE_PENDING";
    SubscriptionPurchaseV2SubscriptionStateEnum["SubscriptionStateActive"] = "SUBSCRIPTION_STATE_ACTIVE";
    SubscriptionPurchaseV2SubscriptionStateEnum["SubscriptionStatePaused"] = "SUBSCRIPTION_STATE_PAUSED";
    SubscriptionPurchaseV2SubscriptionStateEnum["SubscriptionStateInGracePeriod"] = "SUBSCRIPTION_STATE_IN_GRACE_PERIOD";
    SubscriptionPurchaseV2SubscriptionStateEnum["SubscriptionStateOnHold"] = "SUBSCRIPTION_STATE_ON_HOLD";
    SubscriptionPurchaseV2SubscriptionStateEnum["SubscriptionStateCanceled"] = "SUBSCRIPTION_STATE_CANCELED";
    SubscriptionPurchaseV2SubscriptionStateEnum["SubscriptionStateExpired"] = "SUBSCRIPTION_STATE_EXPIRED";
})(SubscriptionPurchaseV2SubscriptionStateEnum || (SubscriptionPurchaseV2SubscriptionStateEnum = {}));
// SubscriptionPurchaseV2
/**
 * Indicates the status of a user's subscription purchase.
**/
var SubscriptionPurchaseV2 = /** @class */ (function (_super) {
    __extends(SubscriptionPurchaseV2, _super);
    function SubscriptionPurchaseV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acknowledgementState" }),
        __metadata("design:type", String)
    ], SubscriptionPurchaseV2.prototype, "acknowledgementState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canceledStateContext" }),
        __metadata("design:type", CanceledStateContext)
    ], SubscriptionPurchaseV2.prototype, "canceledStateContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalAccountIdentifiers" }),
        __metadata("design:type", ExternalAccountIdentifiers)
    ], SubscriptionPurchaseV2.prototype, "externalAccountIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], SubscriptionPurchaseV2.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latestOrderId" }),
        __metadata("design:type", String)
    ], SubscriptionPurchaseV2.prototype, "latestOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lineItems", elemType: SubscriptionPurchaseLineItem }),
        __metadata("design:type", Array)
    ], SubscriptionPurchaseV2.prototype, "lineItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linkedPurchaseToken" }),
        __metadata("design:type", String)
    ], SubscriptionPurchaseV2.prototype, "linkedPurchaseToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pausedStateContext" }),
        __metadata("design:type", PausedStateContext)
    ], SubscriptionPurchaseV2.prototype, "pausedStateContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=regionCode" }),
        __metadata("design:type", String)
    ], SubscriptionPurchaseV2.prototype, "regionCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], SubscriptionPurchaseV2.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribeWithGoogleInfo" }),
        __metadata("design:type", SubscribeWithGoogleInfo)
    ], SubscriptionPurchaseV2.prototype, "subscribeWithGoogleInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptionState" }),
        __metadata("design:type", String)
    ], SubscriptionPurchaseV2.prototype, "subscriptionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=testPurchase" }),
        __metadata("design:type", Map)
    ], SubscriptionPurchaseV2.prototype, "testPurchase", void 0);
    return SubscriptionPurchaseV2;
}(SpeakeasyBase));
export { SubscriptionPurchaseV2 };
