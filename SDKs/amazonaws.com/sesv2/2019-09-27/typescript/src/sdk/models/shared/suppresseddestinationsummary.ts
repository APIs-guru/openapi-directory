import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuppressionListReasonEnum } from "./suppressionlistreasonenum";


// SuppressedDestinationSummary
/** 
 * A summary that describes the suppressed email address.
**/
export class SuppressedDestinationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailAddress" })
  emailAddress: string;

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime: Date;

  @Metadata({ data: "json, name=Reason" })
  reason: SuppressionListReasonEnum;
}
