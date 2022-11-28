import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLaunchProfilesPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class ListLaunchProfilesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    principalId?: string;
    states?: string[];
}
export declare class ListLaunchProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLaunchProfilesRequest extends SpeakeasyBase {
    pathParams: ListLaunchProfilesPathParams;
    queryParams: ListLaunchProfilesQueryParams;
    headers: ListLaunchProfilesHeaders;
}
export declare class ListLaunchProfilesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    listLaunchProfilesResponse?: shared.ListLaunchProfilesResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
