from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum(str, Enum):
    PG = "pg"
    MYSQL = "mysql"
    REDIS = "redis"
    MONGODB = "mongodb"


@dataclass_json
@dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow:
    day: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    description: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hour: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hour' }})
    pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    

@dataclass_json
@dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum(str, Enum):
    CREATING = "creating"
    ONLINE = "online"
    RESIZING = "resizing"
    MIGRATING = "migrating"
    FORKING = "forking"

class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum(str, Enum):
    MYSQL_NATIVE_PASSWORD = "mysql_native_password"
    CACHING_SHA2_PASSWORD = "caching_sha2_password"


@dataclass_json
@dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings:
    auth_plugin: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettingsAuthPluginEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_plugin' }})
    
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum(str, Enum):
    PRIMARY = "primary"
    NORMAL = "normal"


@dataclass_json
@dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers:
    mysql_settings: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersMysqlSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysql_settings' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    role: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsersRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

@dataclass_json
@dataclass
class Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems:
    connection: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    db_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db_names' }})
    engine: Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsEngineEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    maintenance_window: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsMaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenance_window' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    num_nodes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_nodes' }})
    private_connection: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPrivateConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_connection' }})
    private_network_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_network_uuid' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    users: Optional[List[Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsUsers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
