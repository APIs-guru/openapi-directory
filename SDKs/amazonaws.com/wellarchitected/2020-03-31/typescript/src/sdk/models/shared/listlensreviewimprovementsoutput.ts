import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImprovementSummary } from "./improvementsummary";



// ListLensReviewImprovementsOutput
/** 
 * Output of a list lens review improvements call.
**/
export class ListLensReviewImprovementsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImprovementSummaries", elemType: ImprovementSummary })
  improvementSummaries?: ImprovementSummary[];

  @SpeakeasyMetadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
