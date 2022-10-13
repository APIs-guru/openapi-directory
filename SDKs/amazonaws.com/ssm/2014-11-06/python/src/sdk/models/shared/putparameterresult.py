from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import parametertier_enum


@dataclass_json
@dataclass
class PutParameterResult:
    tier: Optional[parametertier_enum.ParameterTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tier' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
