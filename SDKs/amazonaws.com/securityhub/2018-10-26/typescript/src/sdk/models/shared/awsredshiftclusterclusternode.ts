import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterClusterNode
/** 
 * A node in an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterClusterNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NodeRole" })
  nodeRole?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateIpAddress" })
  privateIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicIpAddress" })
  publicIpAddress?: string;
}
