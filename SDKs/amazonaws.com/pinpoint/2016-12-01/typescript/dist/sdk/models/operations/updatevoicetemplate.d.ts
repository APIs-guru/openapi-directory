import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateVoiceTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class UpdateVoiceTemplateQueryParams extends SpeakeasyBase {
    createNewVersion?: boolean;
    version?: string;
}
export declare class UpdateVoiceTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
**/
export declare class UpdateVoiceTemplateRequestBodyVoiceTemplateRequest extends SpeakeasyBase {
    body?: string;
    defaultSubstitutions?: string;
    languageCode?: string;
    templateDescription?: string;
    voiceId?: string;
    tags?: Map<string, string>;
}
export declare class UpdateVoiceTemplateRequestBody extends SpeakeasyBase {
    voiceTemplateRequest: UpdateVoiceTemplateRequestBodyVoiceTemplateRequest;
}
export declare class UpdateVoiceTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateVoiceTemplatePathParams;
    queryParams: UpdateVoiceTemplateQueryParams;
    headers: UpdateVoiceTemplateHeaders;
    request: UpdateVoiceTemplateRequestBody;
}
export declare class UpdateVoiceTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateVoiceTemplateResponse?: shared.UpdateVoiceTemplateResponse;
}
