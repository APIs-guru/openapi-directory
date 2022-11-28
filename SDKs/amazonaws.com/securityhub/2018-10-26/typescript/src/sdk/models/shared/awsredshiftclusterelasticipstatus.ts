import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterElasticIpStatus
/** 
 * The status of the elastic IP (EIP) address for an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterElasticIpStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElasticIp" })
  elasticIp?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
