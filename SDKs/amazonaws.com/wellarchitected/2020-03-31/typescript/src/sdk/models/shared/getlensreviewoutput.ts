import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LensReview } from "./lensreview";


// GetLensReviewOutput
/** 
 * Output of a get lens review call.
**/
export class GetLensReviewOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=LensReview" })
  lensReview?: LensReview;

  @Metadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
