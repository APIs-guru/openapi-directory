import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInstancesHealthStatusQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetInstancesHealthStatusXAmzTargetEnum {
    Route53AutoNamingV20170314GetInstancesHealthStatus = "Route53AutoNaming_v20170314.GetInstancesHealthStatus"
}
export declare class GetInstancesHealthStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInstancesHealthStatusXAmzTargetEnum;
}
export declare class GetInstancesHealthStatusRequest extends SpeakeasyBase {
    queryParams: GetInstancesHealthStatusQueryParams;
    headers: GetInstancesHealthStatusHeaders;
    request: shared.GetInstancesHealthStatusRequest;
}
export declare class GetInstancesHealthStatusResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesHealthStatusResponse?: shared.GetInstancesHealthStatusResponse;
    instanceNotFound?: any;
    invalidInput?: any;
    serviceNotFound?: any;
    statusCode: number;
}
