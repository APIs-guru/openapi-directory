import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RdsDatabaseCredentials
/** 
 * The database credentials to connect to a database on an RDS DB instance.
**/
export class RdsDatabaseCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=Password" })
  password: string;

  @Metadata({ data: "json, name=Username" })
  username: string;
}
