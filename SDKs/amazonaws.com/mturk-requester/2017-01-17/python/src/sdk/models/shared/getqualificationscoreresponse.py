from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import qualification


@dataclass_json
@dataclass
class GetQualificationScoreResponse:
    qualification: Optional[qualification.Qualification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Qualification' }})
    
