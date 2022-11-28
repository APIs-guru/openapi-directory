import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteLaunchProfileMemberPathParams extends SpeakeasyBase {
    launchProfileId: string;
    principalId: string;
    studioId: string;
}
export declare class DeleteLaunchProfileMemberHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteLaunchProfileMemberRequest extends SpeakeasyBase {
    pathParams: DeleteLaunchProfileMemberPathParams;
    headers: DeleteLaunchProfileMemberHeaders;
}
export declare class DeleteLaunchProfileMemberResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    deleteLaunchProfileMemberResponse?: Map<string, any>;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
