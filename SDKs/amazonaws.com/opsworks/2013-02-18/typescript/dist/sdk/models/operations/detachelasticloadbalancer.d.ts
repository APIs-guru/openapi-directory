import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetachElasticLoadBalancerXAmzTargetEnum {
    OpsWorks20130218DetachElasticLoadBalancer = "OpsWorks_20130218.DetachElasticLoadBalancer"
}
export declare class DetachElasticLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetachElasticLoadBalancerXAmzTargetEnum;
}
export declare class DetachElasticLoadBalancerRequest extends SpeakeasyBase {
    headers: DetachElasticLoadBalancerHeaders;
    request: shared.DetachElasticLoadBalancerRequest;
}
export declare class DetachElasticLoadBalancerResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
}
