import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ElasticIp } from "./elasticip";


// DescribeElasticIpsResult
/** 
 * Contains the response to a <code>DescribeElasticIps</code> request.
**/
export class DescribeElasticIpsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElasticIps", elemType: shared.ElasticIp })
  elasticIps?: ElasticIp[];
}
