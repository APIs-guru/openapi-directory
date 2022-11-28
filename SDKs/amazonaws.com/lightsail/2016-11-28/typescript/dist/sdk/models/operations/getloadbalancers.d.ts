import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLoadBalancersXAmzTargetEnum {
    Lightsail20161128GetLoadBalancers = "Lightsail_20161128.GetLoadBalancers"
}
export declare class GetLoadBalancersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLoadBalancersXAmzTargetEnum;
}
export declare class GetLoadBalancersRequest extends SpeakeasyBase {
    headers: GetLoadBalancersHeaders;
    request: shared.GetLoadBalancersRequest;
}
export declare class GetLoadBalancersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    getLoadBalancersResult?: shared.GetLoadBalancersResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
