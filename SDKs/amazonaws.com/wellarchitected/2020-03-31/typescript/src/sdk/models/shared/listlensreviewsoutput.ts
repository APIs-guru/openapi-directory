import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LensReviewSummary } from "./lensreviewsummary";


// ListLensReviewsOutput
/** 
 * Output of a list lens reviews call.
**/
export class ListLensReviewsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=LensReviewSummaries", elemType: shared.LensReviewSummary })
  lensReviewSummaries?: LensReviewSummary[];

  @Metadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
