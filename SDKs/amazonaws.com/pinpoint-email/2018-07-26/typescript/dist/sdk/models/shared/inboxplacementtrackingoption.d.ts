import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (<code>PutDeliverabilityDashboardOption</code> operation).
**/
export declare class InboxPlacementTrackingOption extends SpeakeasyBase {
    global?: boolean;
    trackedIsps?: string[];
}
