import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLaunchProfileMemberPathParams extends SpeakeasyBase {
    launchProfileId: string;
    principalId: string;
    studioId: string;
}
export declare class GetLaunchProfileMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLaunchProfileMemberRequest extends SpeakeasyBase {
    pathParams: GetLaunchProfileMemberPathParams;
    headers: GetLaunchProfileMemberHeaders;
}
export declare class GetLaunchProfileMemberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getLaunchProfileMemberResponse?: shared.GetLaunchProfileMemberResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
