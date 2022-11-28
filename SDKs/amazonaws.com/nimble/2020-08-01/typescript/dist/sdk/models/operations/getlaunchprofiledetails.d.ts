import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLaunchProfileDetailsPathParams extends SpeakeasyBase {
    launchProfileId: string;
    studioId: string;
}
export declare class GetLaunchProfileDetailsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLaunchProfileDetailsRequest extends SpeakeasyBase {
    pathParams: GetLaunchProfileDetailsPathParams;
    headers: GetLaunchProfileDetailsHeaders;
}
export declare class GetLaunchProfileDetailsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getLaunchProfileDetailsResponse?: shared.GetLaunchProfileDetailsResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
