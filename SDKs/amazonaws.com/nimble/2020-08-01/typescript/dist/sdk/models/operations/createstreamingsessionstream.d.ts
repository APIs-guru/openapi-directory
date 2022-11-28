import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStreamingSessionStreamPathParams extends SpeakeasyBase {
    sessionId: string;
    studioId: string;
}
export declare class CreateStreamingSessionStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingSessionStreamRequestBody extends SpeakeasyBase {
    expirationInSeconds?: number;
}
export declare class CreateStreamingSessionStreamRequest extends SpeakeasyBase {
    pathParams: CreateStreamingSessionStreamPathParams;
    headers: CreateStreamingSessionStreamHeaders;
    request: CreateStreamingSessionStreamRequestBody;
}
export declare class CreateStreamingSessionStreamResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createStreamingSessionStreamResponse?: shared.CreateStreamingSessionStreamResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
