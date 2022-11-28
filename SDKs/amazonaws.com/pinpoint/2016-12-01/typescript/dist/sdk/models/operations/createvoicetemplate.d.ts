import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVoiceTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class CreateVoiceTemplateHeaders extends SpeakeasyBase {
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
export declare class CreateVoiceTemplateRequestBodyVoiceTemplateRequest extends SpeakeasyBase {
    body?: string;
    defaultSubstitutions?: string;
    languageCode?: string;
    templateDescription?: string;
    voiceId?: string;
    tags?: Map<string, string>;
}
export declare class CreateVoiceTemplateRequestBody extends SpeakeasyBase {
    voiceTemplateRequest: CreateVoiceTemplateRequestBodyVoiceTemplateRequest;
}
export declare class CreateVoiceTemplateRequest extends SpeakeasyBase {
    pathParams: CreateVoiceTemplatePathParams;
    headers: CreateVoiceTemplateHeaders;
    request: CreateVoiceTemplateRequestBody;
}
export declare class CreateVoiceTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createVoiceTemplateResponse?: shared.CreateVoiceTemplateResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
