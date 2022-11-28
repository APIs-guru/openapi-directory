import { SpeakeasyBase } from "../../../internal/utils";
import { LensStatusEnum } from "./lensstatusenum";
import { PillarReviewSummary } from "./pillarreviewsummary";
/**
 * A lens review of a question.
**/
export declare class LensReview extends SpeakeasyBase {
    lensAlias?: string;
    lensName?: string;
    lensStatus?: LensStatusEnum;
    lensVersion?: string;
    nextToken?: string;
    notes?: string;
    pillarReviewSummaries?: PillarReviewSummary[];
    riskCounts?: Map<string, number>;
    updatedAt?: Date;
}
