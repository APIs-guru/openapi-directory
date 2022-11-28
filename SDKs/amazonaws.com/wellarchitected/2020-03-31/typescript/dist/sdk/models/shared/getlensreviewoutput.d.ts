import { SpeakeasyBase } from "../../../internal/utils";
import { LensReview } from "./lensreview";
/**
 * Output of a get lens review call.
**/
export declare class GetLensReviewOutput extends SpeakeasyBase {
    lensReview?: LensReview;
    milestoneNumber?: number;
    workloadId?: string;
}
