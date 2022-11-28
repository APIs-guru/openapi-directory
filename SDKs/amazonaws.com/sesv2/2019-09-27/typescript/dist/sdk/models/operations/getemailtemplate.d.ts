import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmailTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class GetEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEmailTemplateRequest extends SpeakeasyBase {
    pathParams: GetEmailTemplatePathParams;
    headers: GetEmailTemplateHeaders;
}
export declare class GetEmailTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getEmailTemplateResponse?: shared.GetEmailTemplateResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
