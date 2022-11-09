import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettingsAuthPluginEnum {
    MysqlNativePassword = "mysql_native_password"
,    CachingSha2Password = "caching_sha2_password"
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_plugin" })
  authPlugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettingsAuthPluginEnum;
}

export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsRoleEnum {
    Primary = "primary"
,    Normal = "normal"
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysql_settings" })
  mysqlSettings?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettings;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=role" })
  role?: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsRoleEnum;
}
