import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAnswerPathParams extends SpeakeasyBase {
    lensAlias: string;
    questionId: string;
    workloadId: string;
}
export declare class GetAnswerQueryParams extends SpeakeasyBase {
    milestoneNumber?: number;
}
export declare class GetAnswerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAnswerRequest extends SpeakeasyBase {
    pathParams: GetAnswerPathParams;
    queryParams: GetAnswerQueryParams;
    headers: GetAnswerHeaders;
}
export declare class GetAnswerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAnswerOutput?: shared.GetAnswerOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
