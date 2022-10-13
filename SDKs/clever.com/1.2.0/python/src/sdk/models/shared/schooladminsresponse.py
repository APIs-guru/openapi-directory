from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import schooladminresponse


@dataclass_json
@dataclass
class SchoolAdminsResponse:
    data: Optional[List[schooladminresponse.SchoolAdminResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
