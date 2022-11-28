import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmailTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class GetEmailTemplateQueryParams extends SpeakeasyBase {
    version?: string;
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
    queryParams: GetEmailTemplateQueryParams;
    headers: GetEmailTemplateHeaders;
}
export declare class GetEmailTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getEmailTemplateResponse?: shared.GetEmailTemplateResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
