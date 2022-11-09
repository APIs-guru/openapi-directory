import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudSqlCredential } from "./cloudsqlcredential";

export enum CloudSqlPropertiesTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED"
,    Postgres = "POSTGRES"
,    Mysql = "MYSQL"
}


// CloudSqlProperties
/** 
 * Connection properties specific to the Cloud SQL.
**/
export class CloudSqlProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=credential" })
  credential?: CloudSqlCredential;

  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=serviceAccountId" })
  serviceAccountId?: string;

  @Metadata({ data: "json, name=type" })
  type?: CloudSqlPropertiesTypeEnum;
}
