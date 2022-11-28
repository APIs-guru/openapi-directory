import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApnsVoipChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateApnsVoipChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
**/
export declare class UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest extends SpeakeasyBase {
    bundleId?: string;
    certificate?: string;
    defaultAuthenticationMethod?: string;
    enabled?: boolean;
    privateKey?: string;
    teamId?: string;
    tokenKey?: string;
    tokenKeyId?: string;
}
export declare class UpdateApnsVoipChannelRequestBody extends SpeakeasyBase {
    apnsVoipChannelRequest: UpdateApnsVoipChannelRequestBodyApnsVoipChannelRequest;
}
export declare class UpdateApnsVoipChannelRequest extends SpeakeasyBase {
    pathParams: UpdateApnsVoipChannelPathParams;
    headers: UpdateApnsVoipChannelHeaders;
    request: UpdateApnsVoipChannelRequestBody;
}
export declare class UpdateApnsVoipChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateApnsVoipChannelResponse?: shared.UpdateApnsVoipChannelResponse;
}
