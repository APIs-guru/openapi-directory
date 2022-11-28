import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DismissDecision
/** 
 * A decision that has been made to dismiss an approval request.
**/
export class DismissDecision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dismissTime" })
  dismissTime?: string;

  @SpeakeasyMetadata({ data: "json, name=implicit" })
  implicit?: boolean;
}
