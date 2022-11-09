import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettingsAuthPluginEnum {
    MysqlNativePassword = "mysql_native_password"
,    CachingSha2Password = "caching_sha2_password"
}


export class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_plugin" })
  authPlugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettingsAuthPluginEnum;
}
