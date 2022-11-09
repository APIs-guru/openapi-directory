import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PillarReviewSummary
/** 
 * A pillar review summary of a lens review.
**/
export class PillarReviewSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=Notes" })
  notes?: string;

  @Metadata({ data: "json, name=PillarId" })
  pillarId?: string;

  @Metadata({ data: "json, name=PillarName" })
  pillarName?: string;

  @Metadata({ data: "json, name=RiskCounts" })
  riskCounts?: Map<string, number>;
}
