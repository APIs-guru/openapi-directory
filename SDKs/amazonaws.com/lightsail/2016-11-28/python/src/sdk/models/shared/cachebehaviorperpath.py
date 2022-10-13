from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import behaviorenum_enum


@dataclass_json
@dataclass
class CacheBehaviorPerPath:
    behavior: Optional[behaviorenum_enum.BehaviorEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behavior' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
