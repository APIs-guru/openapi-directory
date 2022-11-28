import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteInAppTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class DeleteInAppTemplateQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class DeleteInAppTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteInAppTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteInAppTemplatePathParams;
    queryParams: DeleteInAppTemplateQueryParams;
    headers: DeleteInAppTemplateHeaders;
}
export declare class DeleteInAppTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteInAppTemplateResponse?: shared.DeleteInAppTemplateResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
