import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEmailTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class DeleteEmailTemplateQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class DeleteEmailTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteEmailTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteEmailTemplatePathParams;
    queryParams: DeleteEmailTemplateQueryParams;
    headers: DeleteEmailTemplateHeaders;
}
export declare class DeleteEmailTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteEmailTemplateResponse?: shared.DeleteEmailTemplateResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
