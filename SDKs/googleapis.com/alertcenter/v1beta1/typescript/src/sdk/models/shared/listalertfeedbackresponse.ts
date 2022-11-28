import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlertFeedback } from "./alertfeedback";



// ListAlertFeedbackResponse
/** 
 * Response message for an alert feedback listing request.
**/
export class ListAlertFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedback", elemType: AlertFeedback })
  feedback?: AlertFeedback[];
}
