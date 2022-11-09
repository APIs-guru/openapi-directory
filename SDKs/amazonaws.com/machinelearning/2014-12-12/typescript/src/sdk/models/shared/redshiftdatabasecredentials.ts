import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RedshiftDatabaseCredentials
/** 
 * Describes the database credentials for connecting to a database on an Amazon Redshift cluster.
**/
export class RedshiftDatabaseCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=Password" })
  password: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
