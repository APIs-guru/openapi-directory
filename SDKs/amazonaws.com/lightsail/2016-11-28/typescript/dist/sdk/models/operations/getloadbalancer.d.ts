import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLoadBalancerXAmzTargetEnum {
    Lightsail20161128GetLoadBalancer = "Lightsail_20161128.GetLoadBalancer"
}
export declare class GetLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLoadBalancerXAmzTargetEnum;
}
export declare class GetLoadBalancerRequest extends SpeakeasyBase {
    headers: GetLoadBalancerHeaders;
    request: shared.GetLoadBalancerRequest;
}
export declare class GetLoadBalancerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getLoadBalancerResult?: shared.GetLoadBalancerResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
