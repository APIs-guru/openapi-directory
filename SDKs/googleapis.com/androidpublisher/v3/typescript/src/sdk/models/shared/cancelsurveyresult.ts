import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CancelSurveyResultReasonEnum {
    CancelSurveyReasonUnspecified = "CANCEL_SURVEY_REASON_UNSPECIFIED",
    CancelSurveyReasonNotEnoughUsage = "CANCEL_SURVEY_REASON_NOT_ENOUGH_USAGE",
    CancelSurveyReasonTechnicalIssues = "CANCEL_SURVEY_REASON_TECHNICAL_ISSUES",
    CancelSurveyReasonCostRelated = "CANCEL_SURVEY_REASON_COST_RELATED",
    CancelSurveyReasonFoundBetterApp = "CANCEL_SURVEY_REASON_FOUND_BETTER_APP",
    CancelSurveyReasonOthers = "CANCEL_SURVEY_REASON_OTHERS"
}


// CancelSurveyResult
/** 
 * Result of the cancel survey when the subscription was canceled by the user.
**/
export class CancelSurveyResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: CancelSurveyResultReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=reasonUserInput" })
  reasonUserInput?: string;
}
