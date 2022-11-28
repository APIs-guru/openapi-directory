import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InboxPlacementTrackingOption } from "./inboxplacementtrackingoption";



// DomainDeliverabilityTrackingOption
/** 
 * An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.
**/
export class DomainDeliverabilityTrackingOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=InboxPlacementTrackingOption" })
  inboxPlacementTrackingOption?: InboxPlacementTrackingOption;

  @SpeakeasyMetadata({ data: "json, name=SubscriptionStartDate" })
  subscriptionStartDate?: Date;
}
