import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSmsTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class CreateSmsTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
**/
export declare class CreateSmsTemplateRequestBodySmsTemplateRequest extends SpeakeasyBase {
    body?: string;
    defaultSubstitutions?: string;
    recommenderId?: string;
    templateDescription?: string;
    tags?: Map<string, string>;
}
export declare class CreateSmsTemplateRequestBody extends SpeakeasyBase {
    smsTemplateRequest: CreateSmsTemplateRequestBodySmsTemplateRequest;
}
export declare class CreateSmsTemplateRequest extends SpeakeasyBase {
    pathParams: CreateSmsTemplatePathParams;
    headers: CreateSmsTemplateHeaders;
    request: CreateSmsTemplateRequestBody;
}
export declare class CreateSmsTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createSmsTemplateResponse?: shared.CreateSmsTemplateResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
