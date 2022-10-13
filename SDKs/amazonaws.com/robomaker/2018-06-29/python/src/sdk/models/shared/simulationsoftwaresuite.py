from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import simulationsoftwaresuitetype_enum


@dataclass_json
@dataclass
class SimulationSoftwareSuite:
    name: Optional[simulationsoftwaresuitetype_enum.SimulationSoftwareSuiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
