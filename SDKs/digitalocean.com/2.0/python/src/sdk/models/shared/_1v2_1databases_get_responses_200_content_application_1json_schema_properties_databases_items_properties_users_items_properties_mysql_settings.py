from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettingsAuthPluginEnum(str, Enum):
    MYSQL_NATIVE_PASSWORD = "mysql_native_password"
    CACHING_SHA2_PASSWORD = "caching_sha2_password"


@dataclass_json
@dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettings:
    auth_plugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsPropertiesMysqlSettingsAuthPluginEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_plugin' }})
    
