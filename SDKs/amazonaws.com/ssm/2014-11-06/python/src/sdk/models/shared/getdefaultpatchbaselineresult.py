from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operatingsystem_enum


@dataclass_json
@dataclass
class GetDefaultPatchBaselineResult:
    baseline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineId' }})
    operating_system: Optional[operatingsystem_enum.OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    
