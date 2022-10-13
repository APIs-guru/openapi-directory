from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListConnectionPoolsPathParams:
    database_cluster_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'database_cluster_uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListConnectionPoolsRequest:
    path_params: ListConnectionPoolsPathParams = field(default=None)
    

@dataclass_json
@dataclass
class ListConnectionPools200ApplicationJSONPoolsConnection:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class ListConnectionPools200ApplicationJSONPoolsPrivateConnection:
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class ListConnectionPools200ApplicationJSONPools:
    connection: Optional[ListConnectionPools200ApplicationJSONPoolsConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection' }})
    db: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db' }})
    mode: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_connection: Optional[ListConnectionPools200ApplicationJSONPoolsPrivateConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private_connection' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class ListConnectionPools200ApplicationJSON:
    pools: Optional[List[ListConnectionPools200ApplicationJSONPools]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pools' }})
    

@dataclass_json
@dataclass
class ListConnectionPools401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListConnectionPoolsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_connection_pools_200_application_json_object: Optional[ListConnectionPools200ApplicationJSON] = field(default=None)
    list_connection_pools_401_application_json_object: Optional[ListConnectionPools401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
