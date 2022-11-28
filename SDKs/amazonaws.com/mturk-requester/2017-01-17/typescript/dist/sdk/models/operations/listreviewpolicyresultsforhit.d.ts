import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListReviewPolicyResultsForHitQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListReviewPolicyResultsForHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117ListReviewPolicyResultsForHit = "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT"
}
export declare class ListReviewPolicyResultsForHitHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReviewPolicyResultsForHitxAmzTargetEnum;
}
export declare class ListReviewPolicyResultsForHitRequest extends SpeakeasyBase {
    queryParams: ListReviewPolicyResultsForHitQueryParams;
    headers: ListReviewPolicyResultsForHitHeaders;
    request: shared.ListReviewPolicyResultsForHitRequest;
}
export declare class ListReviewPolicyResultsForHitResponse extends SpeakeasyBase {
    contentType: string;
    listReviewPolicyResultsForHitResponse?: shared.ListReviewPolicyResultsForHitResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
