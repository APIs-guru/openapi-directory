from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourceshare


@dataclass_json
@dataclass
class UpdateResourceShareResponse:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    resource_share: Optional[resourceshare.ResourceShare] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShare' }})
    
