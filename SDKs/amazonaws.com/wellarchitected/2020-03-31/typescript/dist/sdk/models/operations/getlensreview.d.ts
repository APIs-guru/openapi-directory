import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetLensReviewPathParams extends SpeakeasyBase {
    lensAlias: string;
    workloadId: string;
}
export declare class GetLensReviewQueryParams extends SpeakeasyBase {
    milestoneNumber?: number;
}
export declare class GetLensReviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLensReviewRequest extends SpeakeasyBase {
    pathParams: GetLensReviewPathParams;
    queryParams: GetLensReviewQueryParams;
    headers: GetLensReviewHeaders;
}
export declare class GetLensReviewResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getLensReviewOutput?: shared.GetLensReviewOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
