from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schoolresponse


@dataclass_json
@dataclass
class SchoolsResponse:
    data: Optional[List[schoolresponse.SchoolResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
