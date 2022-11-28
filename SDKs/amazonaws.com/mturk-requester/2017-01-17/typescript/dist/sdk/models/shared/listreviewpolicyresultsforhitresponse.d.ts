import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewPolicy } from "./reviewpolicy";
import { ReviewReport } from "./reviewreport";
export declare class ListReviewPolicyResultsForHitResponse extends SpeakeasyBase {
    assignmentReviewPolicy?: ReviewPolicy;
    assignmentReviewReport?: ReviewReport;
    hitId?: string;
    hitReviewPolicy?: ReviewPolicy;
    hitReviewReport?: ReviewReport;
    nextToken?: string;
}
