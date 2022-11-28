import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStreamingSessionStreamPathParams extends SpeakeasyBase {
    sessionId: string;
    streamId: string;
    studioId: string;
}
export declare class GetStreamingSessionStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStreamingSessionStreamRequest extends SpeakeasyBase {
    pathParams: GetStreamingSessionStreamPathParams;
    headers: GetStreamingSessionStreamHeaders;
}
export declare class GetStreamingSessionStreamResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getStreamingSessionStreamResponse?: shared.GetStreamingSessionStreamResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
