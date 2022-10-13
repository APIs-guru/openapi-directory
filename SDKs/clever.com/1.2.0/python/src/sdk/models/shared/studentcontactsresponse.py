from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import studentcontactresponse


@dataclass_json
@dataclass
class StudentContactsResponse:
    data: Optional[List[studentcontactresponse.StudentContactResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
