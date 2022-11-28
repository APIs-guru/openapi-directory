import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStreamingSessionPathParams extends SpeakeasyBase {
    sessionId: string;
    studioId: string;
}
export declare class GetStreamingSessionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStreamingSessionRequest extends SpeakeasyBase {
    pathParams: GetStreamingSessionPathParams;
    headers: GetStreamingSessionHeaders;
}
export declare class GetStreamingSessionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getStreamingSessionResponse?: shared.GetStreamingSessionResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
