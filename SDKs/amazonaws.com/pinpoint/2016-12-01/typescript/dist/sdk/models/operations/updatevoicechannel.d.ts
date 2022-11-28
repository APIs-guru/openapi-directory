import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVoiceChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateVoiceChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the status and settings of the voice channel for an application.
**/
export declare class UpdateVoiceChannelRequestBodyVoiceChannelRequest extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class UpdateVoiceChannelRequestBody extends SpeakeasyBase {
    voiceChannelRequest: UpdateVoiceChannelRequestBodyVoiceChannelRequest;
}
export declare class UpdateVoiceChannelRequest extends SpeakeasyBase {
    pathParams: UpdateVoiceChannelPathParams;
    headers: UpdateVoiceChannelHeaders;
    request: UpdateVoiceChannelRequestBody;
}
export declare class UpdateVoiceChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateVoiceChannelResponse?: shared.UpdateVoiceChannelResponse;
}
