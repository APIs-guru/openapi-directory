import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLensReviewPathParams extends SpeakeasyBase {
    lensAlias: string;
    workloadId: string;
}
export declare class UpdateLensReviewHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateLensReviewRequestBody extends SpeakeasyBase {
    lensNotes?: string;
    pillarNotes?: Map<string, string>;
}
export declare class UpdateLensReviewRequest extends SpeakeasyBase {
    pathParams: UpdateLensReviewPathParams;
    headers: UpdateLensReviewHeaders;
    request: UpdateLensReviewRequestBody;
}
export declare class UpdateLensReviewResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateLensReviewOutput?: shared.UpdateLensReviewOutput;
    validationException?: any;
}
