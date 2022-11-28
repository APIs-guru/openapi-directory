import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
**/
export declare class SubscriptionCancelSurveyResult extends SpeakeasyBase {
    cancelSurveyReason?: number;
    userInputCancelReason?: string;
}
