import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLaunchProfileInitializationPathParams extends SpeakeasyBase {
    launchProfileId: string;
    studioId: string;
}
export declare class GetLaunchProfileInitializationQueryParams extends SpeakeasyBase {
    launchProfileProtocolVersions: string[];
    launchPurpose: string;
    platform: string;
}
export declare class GetLaunchProfileInitializationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLaunchProfileInitializationRequest extends SpeakeasyBase {
    pathParams: GetLaunchProfileInitializationPathParams;
    queryParams: GetLaunchProfileInitializationQueryParams;
    headers: GetLaunchProfileInitializationHeaders;
}
export declare class GetLaunchProfileInitializationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getLaunchProfileInitializationResponse?: shared.GetLaunchProfileInitializationResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
