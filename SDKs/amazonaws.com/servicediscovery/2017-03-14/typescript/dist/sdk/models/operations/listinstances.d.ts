import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListInstancesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListInstancesXAmzTargetEnum {
    Route53AutoNamingV20170314ListInstances = "Route53AutoNaming_v20170314.ListInstances"
}
export declare class ListInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInstancesXAmzTargetEnum;
}
export declare class ListInstancesRequest extends SpeakeasyBase {
    queryParams: ListInstancesQueryParams;
    headers: ListInstancesHeaders;
    request: shared.ListInstancesRequest;
}
export declare class ListInstancesResponse extends SpeakeasyBase {
    contentType: string;
    invalidInput?: any;
    listInstancesResponse?: shared.ListInstancesResponse;
    serviceNotFound?: any;
    statusCode: number;
}
