import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateEmailTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class CreateEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
**/
export declare class CreateEmailTemplateRequestBodyEmailTemplateRequest extends SpeakeasyBase {
    defaultSubstitutions?: string;
    htmlPart?: string;
    recommenderId?: string;
    subject?: string;
    templateDescription?: string;
    textPart?: string;
    tags?: Map<string, string>;
}
export declare class CreateEmailTemplateRequestBody extends SpeakeasyBase {
    emailTemplateRequest: CreateEmailTemplateRequestBodyEmailTemplateRequest;
}
export declare class CreateEmailTemplateRequest extends SpeakeasyBase {
    pathParams: CreateEmailTemplatePathParams;
    headers: CreateEmailTemplateHeaders;
    request: CreateEmailTemplateRequestBody;
}
export declare class CreateEmailTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createEmailTemplateResponse?: shared.CreateEmailTemplateResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
