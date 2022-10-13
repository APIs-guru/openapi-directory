from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class AlgorithmVersionInfoStatusEnum(str, Enum):
    REQUIRED = "REQUIRED"
    DISCOURAGED = "DISCOURAGED"


@dataclass_json
@dataclass
class AlgorithmVersionInfo:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: AlgorithmVersionInfoStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
