import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTemplateActiveVersionPathParams extends SpeakeasyBase {
    templateName: string;
    templateType: string;
}
export declare class UpdateTemplateActiveVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies which version of a message template to use as the active version of the template.
**/
export declare class UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest extends SpeakeasyBase {
    version?: string;
}
export declare class UpdateTemplateActiveVersionRequestBody extends SpeakeasyBase {
    templateActiveVersionRequest: UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest;
}
export declare class UpdateTemplateActiveVersionRequest extends SpeakeasyBase {
    pathParams: UpdateTemplateActiveVersionPathParams;
    headers: UpdateTemplateActiveVersionHeaders;
    request: UpdateTemplateActiveVersionRequestBody;
}
export declare class UpdateTemplateActiveVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateTemplateActiveVersionResponse?: shared.UpdateTemplateActiveVersionResponse;
}
