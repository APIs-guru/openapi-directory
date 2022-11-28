import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLoadBalancerAttributeXAmzTargetEnum {
    Lightsail20161128UpdateLoadBalancerAttribute = "Lightsail_20161128.UpdateLoadBalancerAttribute"
}
export declare class UpdateLoadBalancerAttributeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLoadBalancerAttributeXAmzTargetEnum;
}
export declare class UpdateLoadBalancerAttributeRequest extends SpeakeasyBase {
    headers: UpdateLoadBalancerAttributeHeaders;
    request: shared.UpdateLoadBalancerAttributeRequest;
}
export declare class UpdateLoadBalancerAttributeResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
    updateLoadBalancerAttributeResult?: shared.UpdateLoadBalancerAttributeResult;
}
