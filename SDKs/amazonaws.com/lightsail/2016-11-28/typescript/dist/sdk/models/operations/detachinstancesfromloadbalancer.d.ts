import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetachInstancesFromLoadBalancerXAmzTargetEnum {
    Lightsail20161128DetachInstancesFromLoadBalancer = "Lightsail_20161128.DetachInstancesFromLoadBalancer"
}
export declare class DetachInstancesFromLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachInstancesFromLoadBalancerXAmzTargetEnum;
}
export declare class DetachInstancesFromLoadBalancerRequest extends SpeakeasyBase {
    headers: DetachInstancesFromLoadBalancerHeaders;
    request: shared.DetachInstancesFromLoadBalancerRequest;
}
export declare class DetachInstancesFromLoadBalancerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    detachInstancesFromLoadBalancerResult?: shared.DetachInstancesFromLoadBalancerResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
