import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlCredential } from "./cloudsqlcredential";


export enum CloudSqlPropertiesTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    Postgres = "POSTGRES",
    Mysql = "MYSQL"
}


// CloudSqlProperties
/** 
 * Connection properties specific to the Cloud SQL.
**/
export class CloudSqlProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credential" })
  credential?: CloudSqlCredential;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountId" })
  serviceAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CloudSqlPropertiesTypeEnum;
}


// CloudSqlPropertiesInput
/** 
 * Connection properties specific to the Cloud SQL.
**/
export class CloudSqlPropertiesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credential" })
  credential?: CloudSqlCredential;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CloudSqlPropertiesTypeEnum;
}
