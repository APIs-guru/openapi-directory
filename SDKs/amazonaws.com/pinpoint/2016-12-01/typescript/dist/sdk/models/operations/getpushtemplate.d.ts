import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPushTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class GetPushTemplateQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class GetPushTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPushTemplateRequest extends SpeakeasyBase {
    pathParams: GetPushTemplatePathParams;
    queryParams: GetPushTemplateQueryParams;
    headers: GetPushTemplateHeaders;
}
export declare class GetPushTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getPushTemplateResponse?: shared.GetPushTemplateResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
