import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AlertFeedback } from "./alertfeedback";


// ListAlertFeedbackResponse
/** 
 * Response message for an alert feedback listing request.
**/
export class ListAlertFeedbackResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedback", elemType: shared.AlertFeedback })
  feedback?: AlertFeedback[];
}
