import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PillarReviewSummary
/** 
 * A pillar review summary of a lens review.
**/
export class PillarReviewSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=PillarId" })
  pillarId?: string;

  @SpeakeasyMetadata({ data: "json, name=PillarName" })
  pillarName?: string;

  @SpeakeasyMetadata({ data: "json, name=RiskCounts" })
  riskCounts?: Map<string, number>;
}
