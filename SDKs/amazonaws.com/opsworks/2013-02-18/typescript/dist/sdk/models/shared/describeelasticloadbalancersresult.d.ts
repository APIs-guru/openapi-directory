import { SpeakeasyBase } from "../../../internal/utils";
import { ElasticLoadBalancer } from "./elasticloadbalancer";
/**
 * Contains the response to a <code>DescribeElasticLoadBalancers</code> request.
**/
export declare class DescribeElasticLoadBalancersResult extends SpeakeasyBase {
    elasticLoadBalancers?: ElasticLoadBalancer[];
}
