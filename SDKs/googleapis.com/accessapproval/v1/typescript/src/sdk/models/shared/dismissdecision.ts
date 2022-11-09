import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DismissDecision
/** 
 * A decision that has been made to dismiss an approval request.
**/
export class DismissDecision extends SpeakeasyBase {
  @Metadata({ data: "json, name=dismissTime" })
  dismissTime?: string;

  @Metadata({ data: "json, name=implicit" })
  implicit?: boolean;
}
