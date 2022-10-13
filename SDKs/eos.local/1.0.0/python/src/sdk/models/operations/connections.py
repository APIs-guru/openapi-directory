from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ConnectionsRequest:
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class Connections200ApplicationJSONLastHandshake:
    agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agent' }})
    chain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chain_id' }})
    generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generation' }})
    head_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_id' }})
    head_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'head_num' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    last_irreversible_block_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_irreversible_block_id' }})
    last_irreversible_block_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_irreversible_block_num' }})
    network_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_version' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    p2p_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'p2p_address' }})
    sig: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sig' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    

@dataclass_json
@dataclass
class Connections200ApplicationJSON:
    connecting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connecting' }})
    last_handshake: Optional[Connections200ApplicationJSONLastHandshake] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_handshake' }})
    peer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peer' }})
    syncing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syncing' }})
    

@dataclass
class ConnectionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    connections_200_application_json_objects: Optional[List[Connections200ApplicationJSON]] = field(default=None)
    
