from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import iceserver


@dataclass_json
@dataclass
class GetIceServerConfigResponse:
    ice_server_list: Optional[List[iceserver.IceServer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IceServerList' }})
    
