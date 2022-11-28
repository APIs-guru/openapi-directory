import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RedshiftDatabaseCredentials
/** 
 * Describes the database credentials for connecting to a database on an Amazon Redshift cluster.
**/
export class RedshiftDatabaseCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
