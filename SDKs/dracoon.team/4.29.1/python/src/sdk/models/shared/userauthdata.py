from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserAuthData:
    ad_config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adConfigId' }})
    login: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    must_change_password: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mustChangePassword' }})
    oid_config_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oidConfigId' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    
