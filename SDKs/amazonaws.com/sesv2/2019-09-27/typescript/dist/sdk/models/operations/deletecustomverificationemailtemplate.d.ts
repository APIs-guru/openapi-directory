import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCustomVerificationEmailTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class DeleteCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteCustomVerificationEmailTemplatePathParams;
    headers: DeleteCustomVerificationEmailTemplateHeaders;
}
export declare class DeleteCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteCustomVerificationEmailTemplateResponse?: Map<string, any>;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
