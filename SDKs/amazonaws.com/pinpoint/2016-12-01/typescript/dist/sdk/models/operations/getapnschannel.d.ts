import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApnsChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetApnsChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApnsChannelRequest extends SpeakeasyBase {
    pathParams: GetApnsChannelPathParams;
    headers: GetApnsChannelHeaders;
}
export declare class GetApnsChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getApnsChannelResponse?: shared.GetApnsChannelResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
