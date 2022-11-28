import { SpeakeasyBase } from "../../../internal/utils";
import { ImprovementSummary } from "./improvementsummary";
/**
 * Output of a list lens review improvements call.
**/
export declare class ListLensReviewImprovementsOutput extends SpeakeasyBase {
    improvementSummaries?: ImprovementSummary[];
    lensAlias?: string;
    milestoneNumber?: number;
    nextToken?: string;
    workloadId?: string;
}
