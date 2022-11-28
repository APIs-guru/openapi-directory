import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApnsVoipSandboxChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateApnsVoipSandboxChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
**/
export declare class UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest extends SpeakeasyBase {
    bundleId?: string;
    certificate?: string;
    defaultAuthenticationMethod?: string;
    enabled?: boolean;
    privateKey?: string;
    teamId?: string;
    tokenKey?: string;
    tokenKeyId?: string;
}
export declare class UpdateApnsVoipSandboxChannelRequestBody extends SpeakeasyBase {
    apnsVoipSandboxChannelRequest: UpdateApnsVoipSandboxChannelRequestBodyApnsVoipSandboxChannelRequest;
}
export declare class UpdateApnsVoipSandboxChannelRequest extends SpeakeasyBase {
    pathParams: UpdateApnsVoipSandboxChannelPathParams;
    headers: UpdateApnsVoipSandboxChannelHeaders;
    request: UpdateApnsVoipSandboxChannelRequestBody;
}
export declare class UpdateApnsVoipSandboxChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateApnsVoipSandboxChannelResponse?: shared.UpdateApnsVoipSandboxChannelResponse;
}
