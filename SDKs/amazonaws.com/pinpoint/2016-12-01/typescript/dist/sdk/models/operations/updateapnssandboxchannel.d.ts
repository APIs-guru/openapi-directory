import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApnsSandboxChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateApnsSandboxChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
**/
export declare class UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest extends SpeakeasyBase {
    bundleId?: string;
    certificate?: string;
    defaultAuthenticationMethod?: string;
    enabled?: boolean;
    privateKey?: string;
    teamId?: string;
    tokenKey?: string;
    tokenKeyId?: string;
}
export declare class UpdateApnsSandboxChannelRequestBody extends SpeakeasyBase {
    apnsSandboxChannelRequest: UpdateApnsSandboxChannelRequestBodyApnsSandboxChannelRequest;
}
export declare class UpdateApnsSandboxChannelRequest extends SpeakeasyBase {
    pathParams: UpdateApnsSandboxChannelPathParams;
    headers: UpdateApnsSandboxChannelHeaders;
    request: UpdateApnsSandboxChannelRequestBody;
}
export declare class UpdateApnsSandboxChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateApnsSandboxChannelResponse?: shared.UpdateApnsSandboxChannelResponse;
}
