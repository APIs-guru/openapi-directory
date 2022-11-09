import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InboxPlacementTrackingOption
/** 
 * An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain.
**/
export class InboxPlacementTrackingOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=Global" })
  global?: boolean;

  @Metadata({ data: "json, name=TrackedIsps" })
  trackedIsps?: string[];
}
