import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSmsTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class UpdateSmsTemplateQueryParams extends SpeakeasyBase {
    createNewVersion?: boolean;
    version?: string;
}
export declare class UpdateSmsTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
**/
export declare class UpdateSmsTemplateRequestBodySmsTemplateRequest extends SpeakeasyBase {
    body?: string;
    defaultSubstitutions?: string;
    recommenderId?: string;
    templateDescription?: string;
    tags?: Map<string, string>;
}
export declare class UpdateSmsTemplateRequestBody extends SpeakeasyBase {
    smsTemplateRequest: UpdateSmsTemplateRequestBodySmsTemplateRequest;
}
export declare class UpdateSmsTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateSmsTemplatePathParams;
    queryParams: UpdateSmsTemplateQueryParams;
    headers: UpdateSmsTemplateHeaders;
    request: UpdateSmsTemplateRequestBody;
}
export declare class UpdateSmsTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateSmsTemplateResponse?: shared.UpdateSmsTemplateResponse;
}
