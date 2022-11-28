import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEmailTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class UpdateEmailTemplateQueryParams extends SpeakeasyBase {
    createNewVersion?: boolean;
    version?: string;
}
export declare class UpdateEmailTemplateHeaders extends SpeakeasyBase {
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
export declare class UpdateEmailTemplateRequestBodyEmailTemplateRequest extends SpeakeasyBase {
    defaultSubstitutions?: string;
    htmlPart?: string;
    recommenderId?: string;
    subject?: string;
    templateDescription?: string;
    textPart?: string;
    tags?: Map<string, string>;
}
export declare class UpdateEmailTemplateRequestBody extends SpeakeasyBase {
    emailTemplateRequest: UpdateEmailTemplateRequestBodyEmailTemplateRequest;
}
export declare class UpdateEmailTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateEmailTemplatePathParams;
    queryParams: UpdateEmailTemplateQueryParams;
    headers: UpdateEmailTemplateHeaders;
    request: UpdateEmailTemplateRequestBody;
}
export declare class UpdateEmailTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateEmailTemplateResponse?: shared.UpdateEmailTemplateResponse;
}
