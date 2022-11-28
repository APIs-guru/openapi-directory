import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEventSourceMappingsQueryParams extends SpeakeasyBase {
    eventSourceArn?: string;
    functionName?: string;
    marker?: string;
    maxItems?: number;
}
export declare class ListEventSourceMappingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEventSourceMappingsRequest extends SpeakeasyBase {
    queryParams: ListEventSourceMappingsQueryParams;
    headers: ListEventSourceMappingsHeaders;
}
export declare class ListEventSourceMappingsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listEventSourceMappingsResponse?: shared.ListEventSourceMappingsResponse;
    resourceNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
