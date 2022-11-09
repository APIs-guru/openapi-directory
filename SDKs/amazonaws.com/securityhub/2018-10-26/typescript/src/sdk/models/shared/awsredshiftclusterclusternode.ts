import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterClusterNode
/** 
 * A node in an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterClusterNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=NodeRole" })
  nodeRole?: string;

  @Metadata({ data: "json, name=PrivateIpAddress" })
  privateIpAddress?: string;

  @Metadata({ data: "json, name=PublicIpAddress" })
  publicIpAddress?: string;
}
