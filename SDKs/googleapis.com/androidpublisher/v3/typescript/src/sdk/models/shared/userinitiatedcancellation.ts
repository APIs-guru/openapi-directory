import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CancelSurveyResult } from "./cancelsurveyresult";


// UserInitiatedCancellation
/** 
 * Information specific to cancellations initiated by users.
**/
export class UserInitiatedCancellation extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelSurveyResult" })
  cancelSurveyResult?: CancelSurveyResult;

  @Metadata({ data: "json, name=cancelTime" })
  cancelTime?: string;
}
