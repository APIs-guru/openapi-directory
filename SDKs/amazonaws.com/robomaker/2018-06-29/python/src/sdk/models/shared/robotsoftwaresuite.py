from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import robotsoftwaresuitetype_enum
from . import robotsoftwaresuiteversiontype_enum


@dataclass_json
@dataclass
class RobotSoftwareSuite:
    name: Optional[robotsoftwaresuitetype_enum.RobotSoftwareSuiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: Optional[robotsoftwaresuiteversiontype_enum.RobotSoftwareSuiteVersionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
