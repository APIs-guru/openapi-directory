import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateStudioPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class UpdateStudioHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateStudioRequestBody extends SpeakeasyBase {
    adminRoleArn?: string;
    displayName?: string;
    userRoleArn?: string;
}
export declare class UpdateStudioRequest extends SpeakeasyBase {
    pathParams: UpdateStudioPathParams;
    headers: UpdateStudioHeaders;
    request: UpdateStudioRequestBody;
}
export declare class UpdateStudioResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateStudioResponse?: shared.UpdateStudioResponse;
    validationException?: any;
}
