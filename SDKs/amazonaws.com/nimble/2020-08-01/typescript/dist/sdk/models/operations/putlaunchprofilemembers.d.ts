import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutLaunchProfileMembersPathParams extends SpeakeasyBase {
    launchProfileId: string;
    studioId: string;
}
export declare class PutLaunchProfileMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutLaunchProfileMembersRequestBody extends SpeakeasyBase {
    identityStoreId: string;
    members: shared.NewLaunchProfileMember[];
}
export declare class PutLaunchProfileMembersRequest extends SpeakeasyBase {
    pathParams: PutLaunchProfileMembersPathParams;
    headers: PutLaunchProfileMembersHeaders;
    request: PutLaunchProfileMembersRequestBody;
}
export declare class PutLaunchProfileMembersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    putLaunchProfileMembersResponse?: Map<string, any>;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
