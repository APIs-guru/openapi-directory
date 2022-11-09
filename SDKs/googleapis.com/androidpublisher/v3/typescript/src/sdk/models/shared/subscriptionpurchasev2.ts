import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CanceledStateContext } from "./canceledstatecontext";
import { ExternalAccountIdentifiers } from "./externalaccountidentifiers";
import { SubscriptionPurchaseLineItem } from "./subscriptionpurchaselineitem";
import { PausedStateContext } from "./pausedstatecontext";
import { SubscribeWithGoogleInfo } from "./subscribewithgoogleinfo";

export enum SubscriptionPurchaseV2AcknowledgementStateEnum {
    AcknowledgementStateUnspecified = "ACKNOWLEDGEMENT_STATE_UNSPECIFIED"
,    AcknowledgementStatePending = "ACKNOWLEDGEMENT_STATE_PENDING"
,    AcknowledgementStateAcknowledged = "ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED"
}

export enum SubscriptionPurchaseV2SubscriptionStateEnum {
    SubscriptionStateUnspecified = "SUBSCRIPTION_STATE_UNSPECIFIED"
,    SubscriptionStatePending = "SUBSCRIPTION_STATE_PENDING"
,    SubscriptionStateActive = "SUBSCRIPTION_STATE_ACTIVE"
,    SubscriptionStatePaused = "SUBSCRIPTION_STATE_PAUSED"
,    SubscriptionStateInGracePeriod = "SUBSCRIPTION_STATE_IN_GRACE_PERIOD"
,    SubscriptionStateOnHold = "SUBSCRIPTION_STATE_ON_HOLD"
,    SubscriptionStateCanceled = "SUBSCRIPTION_STATE_CANCELED"
,    SubscriptionStateExpired = "SUBSCRIPTION_STATE_EXPIRED"
}


// SubscriptionPurchaseV2
/** 
 * Indicates the status of a user's subscription purchase.
**/
export class SubscriptionPurchaseV2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=acknowledgementState" })
  acknowledgementState?: SubscriptionPurchaseV2AcknowledgementStateEnum;

  @Metadata({ data: "json, name=canceledStateContext" })
  canceledStateContext?: CanceledStateContext;

  @Metadata({ data: "json, name=externalAccountIdentifiers" })
  externalAccountIdentifiers?: ExternalAccountIdentifiers;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=latestOrderId" })
  latestOrderId?: string;

  @Metadata({ data: "json, name=lineItems", elemType: shared.SubscriptionPurchaseLineItem })
  lineItems?: SubscriptionPurchaseLineItem[];

  @Metadata({ data: "json, name=linkedPurchaseToken" })
  linkedPurchaseToken?: string;

  @Metadata({ data: "json, name=pausedStateContext" })
  pausedStateContext?: PausedStateContext;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=subscribeWithGoogleInfo" })
  subscribeWithGoogleInfo?: SubscribeWithGoogleInfo;

  @Metadata({ data: "json, name=subscriptionState" })
  subscriptionState?: SubscriptionPurchaseV2SubscriptionStateEnum;

  @Metadata({ data: "json, name=testPurchase" })
  testPurchase?: Map<string, any>;
}
