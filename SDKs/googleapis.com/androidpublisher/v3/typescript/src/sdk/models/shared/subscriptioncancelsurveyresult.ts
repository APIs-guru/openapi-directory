import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubscriptionCancelSurveyResult
/** 
 * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
**/
export class SubscriptionCancelSurveyResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancelSurveyReason" })
  cancelSurveyReason?: number;

  @Metadata({ data: "json, name=userInputCancelReason" })
  userInputCancelReason?: string;
}
