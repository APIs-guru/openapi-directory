import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLoadBalancerMetricDataXAmzTargetEnum {
    Lightsail20161128GetLoadBalancerMetricData = "Lightsail_20161128.GetLoadBalancerMetricData"
}
export declare class GetLoadBalancerMetricDataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLoadBalancerMetricDataXAmzTargetEnum;
}
export declare class GetLoadBalancerMetricDataRequest extends SpeakeasyBase {
    headers: GetLoadBalancerMetricDataHeaders;
    request: shared.GetLoadBalancerMetricDataRequest;
}
export declare class GetLoadBalancerMetricDataResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getLoadBalancerMetricDataResult?: shared.GetLoadBalancerMetricDataResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
