import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatusReason
/** 
 * Provides additional context for the value of <code>Compliance.Status</code>.
**/
export class StatusReason extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ReasonCode" })
  reasonCode: string;
}
