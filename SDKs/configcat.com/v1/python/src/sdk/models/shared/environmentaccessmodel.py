from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import environmentaccesstype_enum


@dataclass_json
@dataclass
class EnvironmentAccessModel:
    environment_access_type: Optional[environmentaccesstype_enum.EnvironmentAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentAccessType' }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
