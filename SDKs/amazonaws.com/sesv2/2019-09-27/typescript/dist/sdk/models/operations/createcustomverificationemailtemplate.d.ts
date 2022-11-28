import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCustomVerificationEmailTemplateRequestBody extends SpeakeasyBase {
    failureRedirectionUrl: string;
    fromEmailAddress: string;
    successRedirectionUrl: string;
    templateContent: string;
    templateName: string;
    templateSubject: string;
}
export declare class CreateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    headers: CreateCustomVerificationEmailTemplateHeaders;
    request: CreateCustomVerificationEmailTemplateRequestBody;
}
export declare class CreateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    badRequestException?: any;
    contentType: string;
    createCustomVerificationEmailTemplateResponse?: Map<string, any>;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
