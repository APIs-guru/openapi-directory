import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudSqlCredential } from "./cloudsqlcredential";


// ConnectionCredential
/** 
 * Credential to use with a connection.
**/
export class ConnectionCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudSql" })
  cloudSql?: CloudSqlCredential;
}
