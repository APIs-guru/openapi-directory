import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomVerificationEmailTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class GetCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
    pathParams: GetCustomVerificationEmailTemplatePathParams;
    headers: GetCustomVerificationEmailTemplateHeaders;
}
export declare class GetCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getCustomVerificationEmailTemplateResponse?: shared.GetCustomVerificationEmailTemplateResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
