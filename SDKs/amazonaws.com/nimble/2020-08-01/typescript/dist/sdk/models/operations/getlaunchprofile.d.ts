import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLaunchProfilePathParams extends SpeakeasyBase {
    launchProfileId: string;
    studioId: string;
}
export declare class GetLaunchProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLaunchProfileRequest extends SpeakeasyBase {
    pathParams: GetLaunchProfilePathParams;
    headers: GetLaunchProfileHeaders;
}
export declare class GetLaunchProfileResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getLaunchProfileResponse?: shared.GetLaunchProfileResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
