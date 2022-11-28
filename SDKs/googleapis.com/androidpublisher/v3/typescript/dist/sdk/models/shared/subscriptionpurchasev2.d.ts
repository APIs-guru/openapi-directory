import { SpeakeasyBase } from "../../../internal/utils";
import { CanceledStateContext } from "./canceledstatecontext";
import { ExternalAccountIdentifiers } from "./externalaccountidentifiers";
import { SubscriptionPurchaseLineItem } from "./subscriptionpurchaselineitem";
import { PausedStateContext } from "./pausedstatecontext";
import { SubscribeWithGoogleInfo } from "./subscribewithgoogleinfo";
export declare enum SubscriptionPurchaseV2AcknowledgementStateEnum {
    AcknowledgementStateUnspecified = "ACKNOWLEDGEMENT_STATE_UNSPECIFIED",
    AcknowledgementStatePending = "ACKNOWLEDGEMENT_STATE_PENDING",
    AcknowledgementStateAcknowledged = "ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED"
}
export declare enum SubscriptionPurchaseV2SubscriptionStateEnum {
    SubscriptionStateUnspecified = "SUBSCRIPTION_STATE_UNSPECIFIED",
    SubscriptionStatePending = "SUBSCRIPTION_STATE_PENDING",
    SubscriptionStateActive = "SUBSCRIPTION_STATE_ACTIVE",
    SubscriptionStatePaused = "SUBSCRIPTION_STATE_PAUSED",
    SubscriptionStateInGracePeriod = "SUBSCRIPTION_STATE_IN_GRACE_PERIOD",
    SubscriptionStateOnHold = "SUBSCRIPTION_STATE_ON_HOLD",
    SubscriptionStateCanceled = "SUBSCRIPTION_STATE_CANCELED",
    SubscriptionStateExpired = "SUBSCRIPTION_STATE_EXPIRED"
}
/**
 * Indicates the status of a user's subscription purchase.
**/
export declare class SubscriptionPurchaseV2 extends SpeakeasyBase {
    acknowledgementState?: SubscriptionPurchaseV2AcknowledgementStateEnum;
    canceledStateContext?: CanceledStateContext;
    externalAccountIdentifiers?: ExternalAccountIdentifiers;
    kind?: string;
    latestOrderId?: string;
    lineItems?: SubscriptionPurchaseLineItem[];
    linkedPurchaseToken?: string;
    pausedStateContext?: PausedStateContext;
    regionCode?: string;
    startTime?: string;
    subscribeWithGoogleInfo?: SubscribeWithGoogleInfo;
    subscriptionState?: SubscriptionPurchaseV2SubscriptionStateEnum;
    testPurchase?: Map<string, any>;
}
