from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StatusRequestBody:
    endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    

@dataclass_json
@dataclass
class Status200ApplicationJSONLastHandshake:
    r"""Status200ApplicationJSONLastHandshake
    Structure holding detailed information about the connection
    """
    
    agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent') }})
    chain_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chain_id') }})
    generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    head_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_id') }})
    head_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_num') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    last_irreversible_block_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_irreversible_block_id') }})
    last_irreversible_block_num: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_irreversible_block_num') }})
    network_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_version') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    p2p_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('p2p_address') }})
    sig: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sig') }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclass
class Status200ApplicationJSON:
    connecting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connecting') }})
    last_handshake: Optional[Status200ApplicationJSONLastHandshake] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_handshake') }})
    peer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peer') }})
    syncing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncing') }})
    

@dataclass
class StatusRequest:
    request: Optional[StatusRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StatusResponse:
    content_type: str = field()
    status_code: int = field()
    status_200_application_json_object: Optional[Status200ApplicationJSON] = field(default=None)
    
