import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatusReason
/** 
 * Provides additional context for the value of <code>Compliance.Status</code>.
**/
export class StatusReason extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=ReasonCode" })
  reasonCode: string;
}
