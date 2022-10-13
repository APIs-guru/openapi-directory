from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operatingsystem_enum


@dataclass_json
@dataclass
class PatchBaselineIdentity:
    baseline_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineDescription' }})
    baseline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineId' }})
    baseline_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineName' }})
    default_baseline: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultBaseline' }})
    operating_system: Optional[operatingsystem_enum.OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    
