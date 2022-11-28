import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLoadBalancerXAmzTargetEnum {
    Lightsail20161128CreateLoadBalancer = "Lightsail_20161128.CreateLoadBalancer"
}
export declare class CreateLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLoadBalancerXAmzTargetEnum;
}
export declare class CreateLoadBalancerRequest extends SpeakeasyBase {
    headers: CreateLoadBalancerHeaders;
    request: shared.CreateLoadBalancerRequest;
}
export declare class CreateLoadBalancerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    createLoadBalancerResult?: shared.CreateLoadBalancerResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
