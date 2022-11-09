import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterElasticIpStatus
/** 
 * The status of the elastic IP (EIP) address for an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterElasticIpStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElasticIp" })
  elasticIp?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
