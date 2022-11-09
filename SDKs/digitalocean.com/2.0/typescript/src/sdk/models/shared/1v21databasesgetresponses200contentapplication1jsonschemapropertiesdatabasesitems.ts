import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection extends SpeakeasyBase {
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

export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum {
    Pg = "pg"
,    Mysql = "mysql"
,    Redis = "redis"
,    Mongodb = "mongodb"
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=day" })
  day: string;

  @Metadata({ data: "json, name=description" })
  description?: string[];

  @Metadata({ data: "json, name=hour" })
  hour: string;

  @Metadata({ data: "json, name=pending" })
  pending?: boolean;
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection extends SpeakeasyBase {
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

export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum {
    Creating = "creating"
,    Online = "online"
,    Resizing = "resizing"
,    Migrating = "migrating"
,    Forking = "forking"
}

export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum {
    MysqlNativePassword = "mysql_native_password"
,    CachingSha2Password = "caching_sha2_password"
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_plugin" })
  authPlugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum;
}

export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum {
    Primary = "primary"
,    Normal = "normal"
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysql_settings" })
  mysqlSettings?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=role" })
  role?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum;
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection" })
  connection?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=db_names" })
  dbNames?: string[];

  @Metadata({ data: "json, name=engine" })
  engine: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=maintenance_window" })
  maintenanceWindow?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=num_nodes" })
  numNodes: number;

  @Metadata({ data: "json, name=private_connection" })
  privateConnection?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection;

  @Metadata({ data: "json, name=private_network_uuid" })
  privateNetworkUuid?: string;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=size" })
  size: string;

  @Metadata({ data: "json, name=status" })
  status?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=users", elemType: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers })
  users?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}
