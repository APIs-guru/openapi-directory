import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LensReviewSummary } from "./lensreviewsummary";



// ListLensReviewsOutput
/** 
 * Output of a list lens reviews call.
**/
export class ListLensReviewsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LensReviewSummaries", elemType: LensReviewSummary })
  lensReviewSummaries?: LensReviewSummary[];

  @SpeakeasyMetadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
