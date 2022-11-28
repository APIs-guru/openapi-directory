import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeletePushTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class DeletePushTemplateQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class DeletePushTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeletePushTemplateRequest extends SpeakeasyBase {
    pathParams: DeletePushTemplatePathParams;
    queryParams: DeletePushTemplateQueryParams;
    headers: DeletePushTemplateHeaders;
}
export declare class DeletePushTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deletePushTemplateResponse?: shared.DeletePushTemplateResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
