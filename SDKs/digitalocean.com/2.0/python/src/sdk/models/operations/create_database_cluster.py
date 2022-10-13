from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateDatabaseClusterRequestBodyBackupRestore:
    backup_created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup_created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database_name' }})
    

@dataclass_json
@dataclass
class CreateDatabaseClusterRequestBodyConnection:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
class CreateDatabaseClusterRequestBodyEngineEnum(str, Enum):
    PG = "pg"
    MYSQL = "mysql"
    REDIS = "redis"
    MONGODB = "mongodb"


@dataclass_json
@dataclass
class CreateDatabaseClusterRequestBodyMaintenanceWindow:
    day: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    description: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hour: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hour' }})
    pending: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    

@dataclass_json
@dataclass
class CreateDatabaseClusterRequestBodyPrivateConnection:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
class CreateDatabaseClusterRequestBodyStatusEnum(str, Enum):
    CREATING = "creating"
    ONLINE = "online"
    RESIZING = "resizing"
    MIGRATING = "migrating"
    FORKING = "forking"

class CreateDatabaseClusterRequestBodyUsersMysqlSettingsAuthPluginEnum(str, Enum):
    MYSQL_NATIVE_PASSWORD = "mysql_native_password"
    CACHING_SHA2_PASSWORD = "caching_sha2_password"


@dataclass_json
@dataclass
class CreateDatabaseClusterRequestBodyUsersMysqlSettings:
    auth_plugin: CreateDatabaseClusterRequestBodyUsersMysqlSettingsAuthPluginEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_plugin' }})
    
class CreateDatabaseClusterRequestBodyUsersRoleEnum(str, Enum):
    PRIMARY = "primary"
    NORMAL = "normal"


@dataclass_json
@dataclass
class CreateDatabaseClusterRequestBodyUsers:
    mysql_settings: Optional[CreateDatabaseClusterRequestBodyUsersMysqlSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysql_settings' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    role: Optional[CreateDatabaseClusterRequestBodyUsersRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

@dataclass_json
@dataclass
class CreateDatabaseClusterRequestBody:
    backup_restore: Optional[CreateDatabaseClusterRequestBodyBackupRestore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup_restore' }})
    connection: Optional[CreateDatabaseClusterRequestBodyConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    db_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db_names' }})
    engine: CreateDatabaseClusterRequestBodyEngineEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    maintenance_window: Optional[CreateDatabaseClusterRequestBodyMaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenance_window' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    num_nodes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_nodes' }})
    private_connection: Optional[CreateDatabaseClusterRequestBodyPrivateConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_connection' }})
    private_network_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_network_uuid' }})
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[CreateDatabaseClusterRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    users: Optional[List[CreateDatabaseClusterRequestBodyUsers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

@dataclass
class CreateDatabaseClusterRequest:
    request: CreateDatabaseClusterRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateDatabaseCluster201ApplicationJSON:
    database: shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItems = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    

@dataclass_json
@dataclass
class CreateDatabaseCluster401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateDatabaseClusterResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_database_cluster_201_application_json_object: Optional[CreateDatabaseCluster201ApplicationJSON] = field(default=None)
    create_database_cluster_401_application_json_object: Optional[CreateDatabaseCluster401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
