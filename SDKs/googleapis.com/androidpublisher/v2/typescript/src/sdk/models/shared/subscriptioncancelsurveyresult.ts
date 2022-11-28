import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscriptionCancelSurveyResult
/** 
 * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
**/
export class SubscriptionCancelSurveyResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cancelSurveyReason?: number;

  @SpeakeasyMetadata()
  userInputCancelReason?: string;
}
