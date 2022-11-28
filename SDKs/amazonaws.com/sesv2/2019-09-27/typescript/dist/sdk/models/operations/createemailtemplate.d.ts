import { SpeakeasyBase } from "../../../internal/utils";
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
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
export declare class CreateEmailTemplateRequestBodyTemplateContent extends SpeakeasyBase {
    html?: string;
    subject?: string;
    text?: string;
}
export declare class CreateEmailTemplateRequestBody extends SpeakeasyBase {
    templateContent: CreateEmailTemplateRequestBodyTemplateContent;
    templateName: string;
}
export declare class CreateEmailTemplateRequest extends SpeakeasyBase {
    headers: CreateEmailTemplateHeaders;
    request: CreateEmailTemplateRequestBody;
}
export declare class CreateEmailTemplateResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    badRequestException?: any;
    contentType: string;
    createEmailTemplateResponse?: Map<string, any>;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
