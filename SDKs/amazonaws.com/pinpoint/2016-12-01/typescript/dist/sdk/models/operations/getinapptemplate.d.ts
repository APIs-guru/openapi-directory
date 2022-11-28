import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInAppTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class GetInAppTemplateQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class GetInAppTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInAppTemplateRequest extends SpeakeasyBase {
    pathParams: GetInAppTemplatePathParams;
    queryParams: GetInAppTemplateQueryParams;
    headers: GetInAppTemplateHeaders;
}
export declare class GetInAppTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getInAppTemplateResponse?: shared.GetInAppTemplateResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
