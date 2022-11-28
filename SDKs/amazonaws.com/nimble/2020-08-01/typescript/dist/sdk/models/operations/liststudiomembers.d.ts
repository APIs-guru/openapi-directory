import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStudioMembersPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class ListStudioMembersQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListStudioMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStudioMembersRequest extends SpeakeasyBase {
    pathParams: ListStudioMembersPathParams;
    queryParams: ListStudioMembersQueryParams;
    headers: ListStudioMembersHeaders;
}
export declare class ListStudioMembersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    listStudioMembersResponse?: shared.ListStudioMembersResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
