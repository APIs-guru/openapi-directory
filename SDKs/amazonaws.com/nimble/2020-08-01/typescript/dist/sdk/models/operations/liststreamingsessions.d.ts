import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStreamingSessionsPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class ListStreamingSessionsQueryParams extends SpeakeasyBase {
    createdBy?: string;
    nextToken?: string;
    ownedBy?: string;
    sessionIds?: string;
}
export declare class ListStreamingSessionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListStreamingSessionsRequest extends SpeakeasyBase {
    pathParams: ListStreamingSessionsPathParams;
    queryParams: ListStreamingSessionsQueryParams;
    headers: ListStreamingSessionsHeaders;
}
export declare class ListStreamingSessionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    listStreamingSessionsResponse?: shared.ListStreamingSessionsResponse;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
