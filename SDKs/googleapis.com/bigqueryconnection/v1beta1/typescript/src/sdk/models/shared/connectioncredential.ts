import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlCredential } from "./cloudsqlcredential";



// ConnectionCredential
/** 
 * Credential to use with a connection.
**/
export class ConnectionCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudSql" })
  cloudSql?: CloudSqlCredential;
}
