import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegisterElasticIpResult
/** 
 * Contains the response to a <code>RegisterElasticIp</code> request.
**/
export class RegisterElasticIpResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElasticIp" })
  elasticIp?: string;
}
