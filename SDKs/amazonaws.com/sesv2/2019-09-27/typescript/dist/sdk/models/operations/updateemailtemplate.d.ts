import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateEmailTemplatePathParams extends SpeakeasyBase {
    templateName: string;
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
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export declare class UpdateEmailTemplateRequestBodyTemplateContent extends SpeakeasyBase {
    html?: string;
    subject?: string;
    text?: string;
}
export declare class UpdateEmailTemplateRequestBody extends SpeakeasyBase {
    templateContent: UpdateEmailTemplateRequestBodyTemplateContent;
}
export declare class UpdateEmailTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateEmailTemplatePathParams;
    headers: UpdateEmailTemplateHeaders;
    request: UpdateEmailTemplateRequestBody;
}
export declare class UpdateEmailTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateEmailTemplateResponse?: Map<string, any>;
}
