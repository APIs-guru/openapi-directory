import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteLoadBalancerXAmzTargetEnum {
    Lightsail20161128DeleteLoadBalancer = "Lightsail_20161128.DeleteLoadBalancer"
}
export declare class DeleteLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLoadBalancerXAmzTargetEnum;
}
export declare class DeleteLoadBalancerRequest extends SpeakeasyBase {
    headers: DeleteLoadBalancerHeaders;
    request: shared.DeleteLoadBalancerRequest;
}
export declare class DeleteLoadBalancerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    deleteLoadBalancerResult?: shared.DeleteLoadBalancerResult;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
