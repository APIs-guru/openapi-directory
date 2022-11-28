import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateApnsChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateApnsChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
**/
export declare class UpdateApnsChannelRequestBodyApnsChannelRequest extends SpeakeasyBase {
    bundleId?: string;
    certificate?: string;
    defaultAuthenticationMethod?: string;
    enabled?: boolean;
    privateKey?: string;
    teamId?: string;
    tokenKey?: string;
    tokenKeyId?: string;
}
export declare class UpdateApnsChannelRequestBody extends SpeakeasyBase {
    apnsChannelRequest: UpdateApnsChannelRequestBodyApnsChannelRequest;
}
export declare class UpdateApnsChannelRequest extends SpeakeasyBase {
    pathParams: UpdateApnsChannelPathParams;
    headers: UpdateApnsChannelHeaders;
    request: UpdateApnsChannelRequestBody;
}
export declare class UpdateApnsChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateApnsChannelResponse?: shared.UpdateApnsChannelResponse;
}
