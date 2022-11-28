import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventStreamPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetEventStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEventStreamRequest extends SpeakeasyBase {
    pathParams: GetEventStreamPathParams;
    headers: GetEventStreamHeaders;
}
export declare class GetEventStreamResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getEventStreamResponse?: shared.GetEventStreamResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
