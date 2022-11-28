import { SpeakeasyBase } from "../../../internal/utils";
import { InboxPlacementTrackingOption } from "./inboxplacementtrackingoption";
/**
 * An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.
**/
export declare class DomainDeliverabilityTrackingOption extends SpeakeasyBase {
    domain?: string;
    inboxPlacementTrackingOption?: InboxPlacementTrackingOption;
    subscriptionStartDate?: Date;
}
