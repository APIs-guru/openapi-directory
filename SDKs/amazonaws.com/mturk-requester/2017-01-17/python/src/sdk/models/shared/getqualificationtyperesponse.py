from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import qualificationtype


@dataclass_json
@dataclass
class GetQualificationTypeResponse:
    qualification_type: Optional[qualificationtype.QualificationType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationType' }})
    
