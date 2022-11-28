import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AttachInstancesToLoadBalancerXAmzTargetEnum {
    Lightsail20161128AttachInstancesToLoadBalancer = "Lightsail_20161128.AttachInstancesToLoadBalancer"
}
export declare class AttachInstancesToLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachInstancesToLoadBalancerXAmzTargetEnum;
}
export declare class AttachInstancesToLoadBalancerRequest extends SpeakeasyBase {
    headers: AttachInstancesToLoadBalancerHeaders;
    request: shared.AttachInstancesToLoadBalancerRequest;
}
export declare class AttachInstancesToLoadBalancerResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    accountSetupInProgressException?: any;
    attachInstancesToLoadBalancerResult?: shared.AttachInstancesToLoadBalancerResult;
    contentType: string;
    invalidInputException?: any;
    notFoundException?: any;
    operationFailureException?: any;
    serviceException?: any;
    statusCode: number;
    unauthenticatedException?: any;
}
