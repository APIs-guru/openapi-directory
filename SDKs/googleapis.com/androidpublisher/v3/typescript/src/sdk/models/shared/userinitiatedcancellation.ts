import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CancelSurveyResult } from "./cancelsurveyresult";



// UserInitiatedCancellation
/** 
 * Information specific to cancellations initiated by users.
**/
export class UserInitiatedCancellation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancelSurveyResult" })
  cancelSurveyResult?: CancelSurveyResult;

  @SpeakeasyMetadata({ data: "json, name=cancelTime" })
  cancelTime?: string;
}
