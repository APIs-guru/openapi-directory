import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteStreamingSessionPathParams extends SpeakeasyBase {
    sessionId: string;
    studioId: string;
}
export declare class DeleteStreamingSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteStreamingSessionRequest extends SpeakeasyBase {
    pathParams: DeleteStreamingSessionPathParams;
    headers: DeleteStreamingSessionHeaders;
}
export declare class DeleteStreamingSessionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteStreamingSessionResponse?: shared.DeleteStreamingSessionResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
