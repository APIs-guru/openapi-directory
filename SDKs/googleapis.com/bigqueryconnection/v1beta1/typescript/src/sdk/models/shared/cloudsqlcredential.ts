import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudSqlCredential
/** 
 * Credential info for the Cloud SQL.
**/
export class CloudSqlCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
