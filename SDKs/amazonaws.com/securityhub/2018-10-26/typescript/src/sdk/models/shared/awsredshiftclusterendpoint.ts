import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterEndpoint
/** 
 * The connection endpoint for an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;
}
