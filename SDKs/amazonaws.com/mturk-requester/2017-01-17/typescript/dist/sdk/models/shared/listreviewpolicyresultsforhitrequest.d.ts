import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewPolicyLevelEnum } from "./reviewpolicylevelenum";
export declare class ListReviewPolicyResultsForHitRequest extends SpeakeasyBase {
    hitId: string;
    maxResults?: number;
    nextToken?: string;
    policyLevels?: ReviewPolicyLevelEnum[];
    retrieveActions?: boolean;
    retrieveResults?: boolean;
}
