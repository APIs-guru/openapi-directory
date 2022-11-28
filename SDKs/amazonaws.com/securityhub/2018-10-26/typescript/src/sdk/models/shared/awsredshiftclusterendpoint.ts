import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterEndpoint
/** 
 * The connection endpoint for an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;
}
