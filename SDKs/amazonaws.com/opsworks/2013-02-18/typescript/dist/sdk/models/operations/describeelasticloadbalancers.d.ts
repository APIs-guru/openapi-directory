import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeElasticLoadBalancersXAmzTargetEnum {
    OpsWorks20130218DescribeElasticLoadBalancers = "OpsWorks_20130218.DescribeElasticLoadBalancers"
}
export declare class DescribeElasticLoadBalancersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeElasticLoadBalancersXAmzTargetEnum;
}
export declare class DescribeElasticLoadBalancersRequest extends SpeakeasyBase {
    headers: DescribeElasticLoadBalancersHeaders;
    request: shared.DescribeElasticLoadBalancersRequest;
}
export declare class DescribeElasticLoadBalancersResponse extends SpeakeasyBase {
    contentType: string;
    describeElasticLoadBalancersResult?: shared.DescribeElasticLoadBalancersResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
