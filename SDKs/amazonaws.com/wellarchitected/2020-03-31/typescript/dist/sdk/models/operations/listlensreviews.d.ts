import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLensReviewsPathParams extends SpeakeasyBase {
    workloadId: string;
}
export declare class ListLensReviewsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    milestoneNumber?: number;
    nextToken?: string;
}
export declare class ListLensReviewsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLensReviewsRequest extends SpeakeasyBase {
    pathParams: ListLensReviewsPathParams;
    queryParams: ListLensReviewsQueryParams;
    headers: ListLensReviewsHeaders;
}
export declare class ListLensReviewsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listLensReviewsOutput?: shared.ListLensReviewsOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
