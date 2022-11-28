import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAdmChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateAdmChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
**/
export declare class UpdateAdmChannelRequestBodyAdmChannelRequest extends SpeakeasyBase {
    clientId?: string;
    clientSecret?: string;
    enabled?: boolean;
}
export declare class UpdateAdmChannelRequestBody extends SpeakeasyBase {
    admChannelRequest: UpdateAdmChannelRequestBodyAdmChannelRequest;
}
export declare class UpdateAdmChannelRequest extends SpeakeasyBase {
    pathParams: UpdateAdmChannelPathParams;
    headers: UpdateAdmChannelHeaders;
    request: UpdateAdmChannelRequestBody;
}
export declare class UpdateAdmChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateAdmChannelResponse?: shared.UpdateAdmChannelResponse;
}
