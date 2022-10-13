from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import healthstatus_enum


@dataclass_json
@dataclass
class GetInstancesHealthStatusResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status: Optional[dict[str, healthstatus_enum.HealthStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
