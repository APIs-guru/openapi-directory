import { SpeakeasyBase } from "../../../internal/utils";
import { CancelSurveyResult } from "./cancelsurveyresult";
/**
 * Information specific to cancellations initiated by users.
**/
export declare class UserInitiatedCancellation extends SpeakeasyBase {
    cancelSurveyResult?: CancelSurveyResult;
    cancelTime?: string;
}
