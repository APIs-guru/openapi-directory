import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSmsChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateSmsChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the status and settings of the SMS channel for an application.
**/
export declare class UpdateSmsChannelRequestBodySmsChannelRequest extends SpeakeasyBase {
    enabled?: boolean;
    senderId?: string;
    shortCode?: string;
}
export declare class UpdateSmsChannelRequestBody extends SpeakeasyBase {
    smsChannelRequest: UpdateSmsChannelRequestBodySmsChannelRequest;
}
export declare class UpdateSmsChannelRequest extends SpeakeasyBase {
    pathParams: UpdateSmsChannelPathParams;
    headers: UpdateSmsChannelHeaders;
    request: UpdateSmsChannelRequestBody;
}
export declare class UpdateSmsChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateSmsChannelResponse?: shared.UpdateSmsChannelResponse;
}
