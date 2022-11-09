import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListLensReviewImprovementsPathParams extends SpeakeasyBase {
    lensAlias: string;
    workloadId: string;
}
export declare class ListLensReviewImprovementsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    milestoneNumber?: number;
    nextToken?: string;
    pillarId?: string;
}
export declare class ListLensReviewImprovementsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLensReviewImprovementsRequest extends SpeakeasyBase {
    pathParams: ListLensReviewImprovementsPathParams;
    queryParams: ListLensReviewImprovementsQueryParams;
    headers: ListLensReviewImprovementsHeaders;
}
export declare class ListLensReviewImprovementsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listLensReviewImprovementsOutput?: shared.ListLensReviewImprovementsOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
