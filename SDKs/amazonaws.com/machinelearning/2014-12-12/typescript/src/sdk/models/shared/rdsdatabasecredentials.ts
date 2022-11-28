import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RdsDatabaseCredentials
/** 
 * The database credentials to connect to a database on an RDS DB instance.
**/
export class RdsDatabaseCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username: string;
}
