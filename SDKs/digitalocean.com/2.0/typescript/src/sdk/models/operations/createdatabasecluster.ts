import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDatabaseClusterRequestBodyBackupRestore extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup_created_at" })
  backupCreatedAt?: Date;

  @Metadata({ data: "json, name=database_name" })
  databaseName: string;
}


export class CreateDatabaseClusterRequestBodyConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=ssl" })
  ssl?: boolean;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}

export enum CreateDatabaseClusterRequestBodyEngineEnum {
    Pg = "pg"
,    Mysql = "mysql"
,    Redis = "redis"
,    Mongodb = "mongodb"
}


export class CreateDatabaseClusterRequestBodyMaintenanceWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=day" })
  day: string;

  @Metadata({ data: "json, name=description" })
  description?: string[];

  @Metadata({ data: "json, name=hour" })
  hour: string;

  @Metadata({ data: "json, name=pending" })
  pending?: boolean;
}


export class CreateDatabaseClusterRequestBodyPrivateConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database?: string;

  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=ssl" })
  ssl?: boolean;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}

export enum CreateDatabaseClusterRequestBodyStatusEnum {
    Creating = "creating"
,    Online = "online"
,    Resizing = "resizing"
,    Migrating = "migrating"
,    Forking = "forking"
}

export enum CreateDatabaseClusterRequestBodyUsersMysqlSettingsAuthPluginEnum {
    MysqlNativePassword = "mysql_native_password"
,    CachingSha2Password = "caching_sha2_password"
}


export class CreateDatabaseClusterRequestBodyUsersMysqlSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_plugin" })
  authPlugin: CreateDatabaseClusterRequestBodyUsersMysqlSettingsAuthPluginEnum;
}

export enum CreateDatabaseClusterRequestBodyUsersRoleEnum {
    Primary = "primary"
,    Normal = "normal"
}


export class CreateDatabaseClusterRequestBodyUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysql_settings" })
  mysqlSettings?: CreateDatabaseClusterRequestBodyUsersMysqlSettings;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=role" })
  role?: CreateDatabaseClusterRequestBodyUsersRoleEnum;
}


export class CreateDatabaseClusterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup_restore" })
  backupRestore?: CreateDatabaseClusterRequestBodyBackupRestore;

  @Metadata({ data: "json, name=connection" })
  connection?: CreateDatabaseClusterRequestBodyConnection;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=db_names" })
  dbNames?: string[];

  @Metadata({ data: "json, name=engine" })
  engine: CreateDatabaseClusterRequestBodyEngineEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=maintenance_window" })
  maintenanceWindow?: CreateDatabaseClusterRequestBodyMaintenanceWindow;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=num_nodes" })
  numNodes: number;

  @Metadata({ data: "json, name=private_connection" })
  privateConnection?: CreateDatabaseClusterRequestBodyPrivateConnection;

  @Metadata({ data: "json, name=private_network_uuid" })
  privateNetworkUuid?: string;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=size" })
  size: string;

  @Metadata({ data: "json, name=status" })
  status?: CreateDatabaseClusterRequestBodyStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=users", elemType: operations.CreateDatabaseClusterRequestBodyUsers })
  users?: CreateDatabaseClusterRequestBodyUsers[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class CreateDatabaseClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDatabaseClusterRequestBody;
}


export class CreateDatabaseCluster201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=database" })
  database: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems;
}


export class CreateDatabaseCluster401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class CreateDatabaseClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDatabaseCluster201ApplicationJsonObject?: CreateDatabaseCluster201ApplicationJson;

  @Metadata()
  createDatabaseCluster401ApplicationJsonObject?: CreateDatabaseCluster401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
