import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEventSourcesQueryParams extends SpeakeasyBase {
    eventSource?: string;
    functionName?: string;
    marker?: string;
    maxItems?: number;
}
export declare class ListEventSourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEventSourcesRequest extends SpeakeasyBase {
    queryParams: ListEventSourcesQueryParams;
    headers: ListEventSourcesHeaders;
}
export declare class ListEventSourcesResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: shared.InvalidParameterValueException;
    listEventSourcesResponse?: shared.ListEventSourcesResponse;
    resourceNotFoundException?: shared.ResourceNotFoundException;
    serviceException?: shared.ServiceException;
    statusCode: number;
}
