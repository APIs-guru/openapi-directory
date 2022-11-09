import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudSqlCredential } from "./cloudsqlcredential";
/**
 * Credential to use with a connection.
**/
export declare class ConnectionCredential extends SpeakeasyBase {
    cloudSql?: CloudSqlCredential;
}
