import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteStudioComponentPathParams extends SpeakeasyBase {
    studioComponentId: string;
    studioId: string;
}
export declare class DeleteStudioComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteStudioComponentRequest extends SpeakeasyBase {
    pathParams: DeleteStudioComponentPathParams;
    headers: DeleteStudioComponentHeaders;
}
export declare class DeleteStudioComponentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteStudioComponentResponse?: shared.DeleteStudioComponentResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
