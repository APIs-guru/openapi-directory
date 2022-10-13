from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import intendeduse_enum


@dataclass_json
@dataclass
class DataSourceConfiguration:
    intended_use: Optional[intendeduse_enum.IntendedUseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntendedUse' }})
    
