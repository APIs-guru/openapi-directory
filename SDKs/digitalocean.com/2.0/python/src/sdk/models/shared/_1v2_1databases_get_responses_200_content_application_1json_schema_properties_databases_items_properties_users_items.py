from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettingsAuthPluginEnum(str, Enum):
    MYSQL_NATIVE_PASSWORD = "mysql_native_password"
    CACHING_SHA2_PASSWORD = "caching_sha2_password"


@dataclass_json
@dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettings:
    auth_plugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettingsAuthPluginEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_plugin' }})
    
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsRoleEnum(str, Enum):
    PRIMARY = "primary"
    NORMAL = "normal"


@dataclass_json
@dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItems:
    mysql_settings: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsMysqlSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysql_settings' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    role: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
