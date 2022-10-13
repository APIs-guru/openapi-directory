from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import warmupstatus_enum


@dataclass_json
@dataclass
class DedicatedIP:
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ip' }})
    pool_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PoolName' }})
    warmup_percentage: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WarmupPercentage' }})
    warmup_status: warmupstatus_enum.WarmupStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WarmupStatus' }})
    
