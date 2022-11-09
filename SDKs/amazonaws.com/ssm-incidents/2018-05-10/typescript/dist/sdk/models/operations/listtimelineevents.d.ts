import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTimelineEventsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListTimelineEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum ListTimelineEventsRequestBodySortByEnum {
    EventTime = "EVENT_TIME"
}
export declare enum ListTimelineEventsRequestBodySortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class ListTimelineEventsRequestBody extends SpeakeasyBase {
    filters?: shared.Filter[];
    incidentRecordArn: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: ListTimelineEventsRequestBodySortByEnum;
    sortOrder?: ListTimelineEventsRequestBodySortOrderEnum;
}
export declare class ListTimelineEventsRequest extends SpeakeasyBase {
    queryParams: ListTimelineEventsQueryParams;
    headers: ListTimelineEventsHeaders;
    request: ListTimelineEventsRequestBody;
}
export declare class ListTimelineEventsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listTimelineEventsOutput?: shared.ListTimelineEventsOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
