import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSmsTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class DeleteSmsTemplateQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class DeleteSmsTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSmsTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteSmsTemplatePathParams;
    queryParams: DeleteSmsTemplateQueryParams;
    headers: DeleteSmsTemplateHeaders;
}
export declare class DeleteSmsTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteSmsTemplateResponse?: shared.DeleteSmsTemplateResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
