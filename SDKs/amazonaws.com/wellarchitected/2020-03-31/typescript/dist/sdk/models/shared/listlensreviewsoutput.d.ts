import { SpeakeasyBase } from "../../../internal/utils";
import { LensReviewSummary } from "./lensreviewsummary";
/**
 * Output of a list lens reviews call.
**/
export declare class ListLensReviewsOutput extends SpeakeasyBase {
    lensReviewSummaries?: LensReviewSummary[];
    milestoneNumber?: number;
    nextToken?: string;
    workloadId?: string;
}
