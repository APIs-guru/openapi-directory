import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateCustomVerificationEmailTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class UpdateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCustomVerificationEmailTemplateRequestBody extends SpeakeasyBase {
    failureRedirectionUrl: string;
    fromEmailAddress: string;
    successRedirectionUrl: string;
    templateContent: string;
    templateSubject: string;
}
export declare class UpdateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateCustomVerificationEmailTemplatePathParams;
    headers: UpdateCustomVerificationEmailTemplateHeaders;
    request: UpdateCustomVerificationEmailTemplateRequestBody;
}
export declare class UpdateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateCustomVerificationEmailTemplateResponse?: Map<string, any>;
}
