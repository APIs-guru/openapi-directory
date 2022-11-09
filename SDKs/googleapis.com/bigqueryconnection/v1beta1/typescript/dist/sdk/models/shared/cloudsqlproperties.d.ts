import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudSqlCredential } from "./cloudsqlcredential";
export declare enum CloudSqlPropertiesTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    Postgres = "POSTGRES",
    Mysql = "MYSQL"
}
/**
 * Connection properties specific to the Cloud SQL.
**/
export declare class CloudSqlProperties extends SpeakeasyBase {
    credential?: CloudSqlCredential;
    database?: string;
    instanceId?: string;
    serviceAccountId?: string;
    type?: CloudSqlPropertiesTypeEnum;
}
