import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGcmChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateGcmChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
**/
export declare class UpdateGcmChannelRequestBodyGcmChannelRequest extends SpeakeasyBase {
    apiKey?: string;
    enabled?: boolean;
}
export declare class UpdateGcmChannelRequestBody extends SpeakeasyBase {
    gcmChannelRequest: UpdateGcmChannelRequestBodyGcmChannelRequest;
}
export declare class UpdateGcmChannelRequest extends SpeakeasyBase {
    pathParams: UpdateGcmChannelPathParams;
    headers: UpdateGcmChannelHeaders;
    request: UpdateGcmChannelRequestBody;
}
export declare class UpdateGcmChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateGcmChannelResponse?: shared.UpdateGcmChannelResponse;
}
