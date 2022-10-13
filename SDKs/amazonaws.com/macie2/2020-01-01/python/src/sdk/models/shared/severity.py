from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import severitydescription_enum


@dataclass_json
@dataclass
class Severity:
    description: Optional[severitydescription_enum.SeverityDescriptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    
