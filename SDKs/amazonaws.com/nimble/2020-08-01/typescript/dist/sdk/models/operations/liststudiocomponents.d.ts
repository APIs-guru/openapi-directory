import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStudioComponentsPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class ListStudioComponentsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    states?: string[];
    types?: string[];
}
export declare class ListStudioComponentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStudioComponentsRequest extends SpeakeasyBase {
    pathParams: ListStudioComponentsPathParams;
    queryParams: ListStudioComponentsQueryParams;
    headers: ListStudioComponentsHeaders;
}
export declare class ListStudioComponentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    listStudioComponentsResponse?: shared.ListStudioComponentsResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
