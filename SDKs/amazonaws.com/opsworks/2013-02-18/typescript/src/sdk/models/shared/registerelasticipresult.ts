import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterElasticIpResult
/** 
 * Contains the response to a <code>RegisterElasticIp</code> request.
**/
export class RegisterElasticIpResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElasticIp" })
  elasticIp?: string;
}
