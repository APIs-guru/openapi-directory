import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSmsChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetSmsChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSmsChannelRequest extends SpeakeasyBase {
    pathParams: GetSmsChannelPathParams;
    headers: GetSmsChannelHeaders;
}
export declare class GetSmsChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getSmsChannelResponse?: shared.GetSmsChannelResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
