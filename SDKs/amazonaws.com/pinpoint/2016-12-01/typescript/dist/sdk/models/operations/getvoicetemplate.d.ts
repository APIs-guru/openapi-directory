import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVoiceTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class GetVoiceTemplateQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class GetVoiceTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetVoiceTemplateRequest extends SpeakeasyBase {
    pathParams: GetVoiceTemplatePathParams;
    queryParams: GetVoiceTemplateQueryParams;
    headers: GetVoiceTemplateHeaders;
}
export declare class GetVoiceTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getVoiceTemplateResponse?: shared.GetVoiceTemplateResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
