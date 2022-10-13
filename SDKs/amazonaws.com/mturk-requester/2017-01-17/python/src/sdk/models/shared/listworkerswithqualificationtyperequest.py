from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import qualificationstatus_enum


@dataclass_json
@dataclass
class ListWorkersWithQualificationTypeRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    qualification_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualificationTypeId' }})
    status: Optional[qualificationstatus_enum.QualificationStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
