import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElasticLoadBalancer } from "./elasticloadbalancer";



// DescribeElasticLoadBalancersResult
/** 
 * Contains the response to a <code>DescribeElasticLoadBalancers</code> request.
**/
export class DescribeElasticLoadBalancersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElasticLoadBalancers", elemType: ElasticLoadBalancer })
  elasticLoadBalancers?: ElasticLoadBalancer[];
}
