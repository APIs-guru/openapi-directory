from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import schooladmin


@dataclass_json
@dataclass
class SchoolAdminResponse:
    data: Optional[schooladmin.SchoolAdmin] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
