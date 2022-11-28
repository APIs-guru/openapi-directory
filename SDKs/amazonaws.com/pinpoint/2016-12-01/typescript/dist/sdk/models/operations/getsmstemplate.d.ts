import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSmsTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class GetSmsTemplateQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class GetSmsTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSmsTemplateRequest extends SpeakeasyBase {
    pathParams: GetSmsTemplatePathParams;
    queryParams: GetSmsTemplateQueryParams;
    headers: GetSmsTemplateHeaders;
}
export declare class GetSmsTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getSmsTemplateResponse?: shared.GetSmsTemplateResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
