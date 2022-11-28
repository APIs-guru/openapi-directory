import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudSqlCredential
/** 
 * Credential info for the Cloud SQL.
**/
export class CloudSqlCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
