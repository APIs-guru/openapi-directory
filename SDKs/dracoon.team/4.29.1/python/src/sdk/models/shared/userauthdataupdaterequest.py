from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserAuthDataUpdateRequest:
    ad_config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adConfigId' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    oid_config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidConfigId' }})
    
