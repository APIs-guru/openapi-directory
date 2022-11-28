import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLaunchProfileMemberPathParams extends SpeakeasyBase {
    launchProfileId: string;
    principalId: string;
    studioId: string;
}
export declare class UpdateLaunchProfileMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateLaunchProfileMemberRequestBodyPersonaEnum {
    User = "USER"
}
export declare class UpdateLaunchProfileMemberRequestBody extends SpeakeasyBase {
    persona: UpdateLaunchProfileMemberRequestBodyPersonaEnum;
}
export declare class UpdateLaunchProfileMemberRequest extends SpeakeasyBase {
    pathParams: UpdateLaunchProfileMemberPathParams;
    headers: UpdateLaunchProfileMemberHeaders;
    request: UpdateLaunchProfileMemberRequestBody;
}
export declare class UpdateLaunchProfileMemberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateLaunchProfileMemberResponse?: shared.UpdateLaunchProfileMemberResponse;
    validationException?: any;
}
