import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DiscoverInstancesXAmzTargetEnum {
    Route53AutoNamingV20170314DiscoverInstances = "Route53AutoNaming_v20170314.DiscoverInstances"
}
export declare class DiscoverInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DiscoverInstancesXAmzTargetEnum;
}
export declare class DiscoverInstancesRequest extends SpeakeasyBase {
    headers: DiscoverInstancesHeaders;
    request: shared.DiscoverInstancesRequest;
}
export declare class DiscoverInstancesResponse extends SpeakeasyBase {
    contentType: string;
    discoverInstancesResponse?: shared.DiscoverInstancesResponse;
    invalidInput?: any;
    namespaceNotFound?: any;
    requestLimitExceeded?: any;
    serviceNotFound?: any;
    statusCode: number;
}
