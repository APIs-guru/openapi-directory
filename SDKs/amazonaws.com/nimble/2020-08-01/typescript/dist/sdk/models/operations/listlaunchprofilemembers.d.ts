import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLaunchProfileMembersPathParams extends SpeakeasyBase {
    launchProfileId: string;
    studioId: string;
}
export declare class ListLaunchProfileMembersQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListLaunchProfileMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLaunchProfileMembersRequest extends SpeakeasyBase {
    pathParams: ListLaunchProfileMembersPathParams;
    queryParams: ListLaunchProfileMembersQueryParams;
    headers: ListLaunchProfileMembersHeaders;
}
export declare class ListLaunchProfileMembersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    listLaunchProfileMembersResponse?: shared.ListLaunchProfileMembersResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
