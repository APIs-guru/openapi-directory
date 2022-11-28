import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLogEventsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum GetLogEventsXAmzTargetEnum {
    Logs20140328GetLogEvents = "Logs_20140328.GetLogEvents"
}
export declare class GetLogEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLogEventsXAmzTargetEnum;
}
export declare class GetLogEventsRequest extends SpeakeasyBase {
    queryParams: GetLogEventsQueryParams;
    headers: GetLogEventsHeaders;
    request: shared.GetLogEventsRequest;
}
export declare class GetLogEventsResponse extends SpeakeasyBase {
    contentType: string;
    getLogEventsResponse?: shared.GetLogEventsResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
