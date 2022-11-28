import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LensReview } from "./lensreview";



// GetLensReviewOutput
/** 
 * Output of a get lens review call.
**/
export class GetLensReviewOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LensReview" })
  lensReview?: LensReview;

  @SpeakeasyMetadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
