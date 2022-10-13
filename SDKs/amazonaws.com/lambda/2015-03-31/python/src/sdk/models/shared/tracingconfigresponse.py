from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import tracingmode_enum


@dataclass_json
@dataclass
class TracingConfigResponse:
    mode: Optional[tracingmode_enum.TracingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    
