import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FilterLogEventsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum FilterLogEventsXAmzTargetEnum {
    Logs20140328FilterLogEvents = "Logs_20140328.FilterLogEvents"
}
export declare class FilterLogEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: FilterLogEventsXAmzTargetEnum;
}
export declare class FilterLogEventsRequest extends SpeakeasyBase {
    queryParams: FilterLogEventsQueryParams;
    headers: FilterLogEventsHeaders;
    request: shared.FilterLogEventsRequest;
}
export declare class FilterLogEventsResponse extends SpeakeasyBase {
    contentType: string;
    filterLogEventsResponse?: shared.FilterLogEventsResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
