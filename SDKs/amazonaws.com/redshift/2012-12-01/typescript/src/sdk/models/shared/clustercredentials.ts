import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterCredentials
/** 
 * Temporary credentials with authorization to log on to an Amazon Redshift database. 
**/
export class ClusterCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbPassword?: string;

  @SpeakeasyMetadata()
  dbUser?: string;

  @SpeakeasyMetadata()
  expiration?: Date;
}
