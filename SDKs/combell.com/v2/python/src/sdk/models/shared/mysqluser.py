from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import userrights_enum


@dataclass_json
@dataclass
class MySQLUser:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rights: Optional[userrights_enum.UserRightsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rights' }})
    
