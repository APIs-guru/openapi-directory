import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ElasticLoadBalancer } from "./elasticloadbalancer";


// DescribeElasticLoadBalancersResult
/** 
 * Contains the response to a <code>DescribeElasticLoadBalancers</code> request.
**/
export class DescribeElasticLoadBalancersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElasticLoadBalancers", elemType: shared.ElasticLoadBalancer })
  elasticLoadBalancers?: ElasticLoadBalancer[];
}
