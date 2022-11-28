import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLaunchProfilePathParams extends SpeakeasyBase {
    launchProfileId: string;
    studioId: string;
}
export declare class DeleteLaunchProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteLaunchProfileRequest extends SpeakeasyBase {
    pathParams: DeleteLaunchProfilePathParams;
    headers: DeleteLaunchProfileHeaders;
}
export declare class DeleteLaunchProfileResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteLaunchProfileResponse?: shared.DeleteLaunchProfileResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
