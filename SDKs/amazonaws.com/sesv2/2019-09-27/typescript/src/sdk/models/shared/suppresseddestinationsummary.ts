import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuppressionListReasonEnum } from "./suppressionlistreasonenum";



// SuppressedDestinationSummary
/** 
 * A summary that describes the suppressed email address.
**/
export class SuppressedDestinationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailAddress" })
  emailAddress: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason: SuppressionListReasonEnum;
}
