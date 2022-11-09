import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTrackerConsumersPathParams extends SpeakeasyBase {
    trackerName: string;
}
export declare class ListTrackerConsumersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListTrackerConsumersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTrackerConsumersRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListTrackerConsumersRequest extends SpeakeasyBase {
    pathParams: ListTrackerConsumersPathParams;
    queryParams: ListTrackerConsumersQueryParams;
    headers: ListTrackerConsumersHeaders;
    request: ListTrackerConsumersRequestBody;
}
export declare class ListTrackerConsumersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listTrackerConsumersResponse?: shared.ListTrackerConsumersResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
