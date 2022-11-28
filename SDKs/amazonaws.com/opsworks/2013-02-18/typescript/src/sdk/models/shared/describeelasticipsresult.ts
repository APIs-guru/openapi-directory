import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ElasticIp } from "./elasticip";



// DescribeElasticIpsResult
/** 
 * Contains the response to a <code>DescribeElasticIps</code> request.
**/
export class DescribeElasticIpsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElasticIps", elemType: ElasticIp })
  elasticIps?: ElasticIp[];
}
