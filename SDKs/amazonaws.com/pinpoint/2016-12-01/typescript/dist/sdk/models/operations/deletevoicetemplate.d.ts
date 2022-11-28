import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVoiceTemplatePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class DeleteVoiceTemplateQueryParams extends SpeakeasyBase {
    version?: string;
}
export declare class DeleteVoiceTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteVoiceTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteVoiceTemplatePathParams;
    queryParams: DeleteVoiceTemplateQueryParams;
    headers: DeleteVoiceTemplateHeaders;
}
export declare class DeleteVoiceTemplateResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteVoiceTemplateResponse?: shared.DeleteVoiceTemplateResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
