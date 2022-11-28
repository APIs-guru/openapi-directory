import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InboxPlacementTrackingOption
/** 
 * An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (<code>PutDeliverabilityDashboardOption</code> operation).
**/
export class InboxPlacementTrackingOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Global" })
  global?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TrackedIsps" })
  trackedIsps?: string[];
}
