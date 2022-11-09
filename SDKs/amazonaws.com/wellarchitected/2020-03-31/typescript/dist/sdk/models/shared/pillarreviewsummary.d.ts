import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A pillar review summary of a lens review.
**/
export declare class PillarReviewSummary extends SpeakeasyBase {
    notes?: string;
    pillarId?: string;
    pillarName?: string;
    riskCounts?: Map<string, number>;
}
