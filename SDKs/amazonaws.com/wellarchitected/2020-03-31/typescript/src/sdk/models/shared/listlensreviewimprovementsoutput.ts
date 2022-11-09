import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImprovementSummary } from "./improvementsummary";


// ListLensReviewImprovementsOutput
/** 
 * Output of a list lens review improvements call.
**/
export class ListLensReviewImprovementsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImprovementSummaries", elemType: shared.ImprovementSummary })
  improvementSummaries?: ImprovementSummary[];

  @Metadata({ data: "json, name=LensAlias" })
  lensAlias?: string;

  @Metadata({ data: "json, name=MilestoneNumber" })
  milestoneNumber?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WorkloadId" })
  workloadId?: string;
}
