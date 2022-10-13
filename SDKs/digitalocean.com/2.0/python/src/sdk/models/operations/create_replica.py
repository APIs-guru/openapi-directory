from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateReplicaPathParams:
    database_cluster_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateReplicaRequestBodyConnection:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class CreateReplicaRequestBodyPrivateConnection:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
class CreateReplicaRequestBodyStatusEnum(str, Enum):
    CREATING = "creating"
    ONLINE = "online"
    RESIZING = "resizing"
    MIGRATING = "migrating"
    FORKING = "forking"


@dataclass_json
@dataclass
class CreateReplicaRequestBody:
    connection: Optional[CreateReplicaRequestBodyConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_connection: Optional[CreateReplicaRequestBodyPrivateConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_connection' }})
    private_network_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_network_uuid' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    size: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    status: Optional[CreateReplicaRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateReplicaRequest:
    path_params: CreateReplicaPathParams = field(default=None)
    request: Optional[CreateReplicaRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateReplica201ApplicationJSON:
    replica: Optional[shared.Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1replicasGetResponses200ContentApplication1jsonSchemaPropertiesReplicasItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replica' }})
    

@dataclass_json
@dataclass
class CreateReplica401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateReplicaResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_replica_201_application_json_object: Optional[CreateReplica201ApplicationJSON] = field(default=None)
    create_replica_401_application_json_object: Optional[CreateReplica401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
