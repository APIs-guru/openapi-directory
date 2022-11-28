import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AttachElasticLoadBalancerXAmzTargetEnum {
    OpsWorks20130218AttachElasticLoadBalancer = "OpsWorks_20130218.AttachElasticLoadBalancer"
}
export declare class AttachElasticLoadBalancerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AttachElasticLoadBalancerXAmzTargetEnum;
}
export declare class AttachElasticLoadBalancerRequest extends SpeakeasyBase {
    headers: AttachElasticLoadBalancerHeaders;
    request: shared.AttachElasticLoadBalancerRequest;
}
export declare class AttachElasticLoadBalancerResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
