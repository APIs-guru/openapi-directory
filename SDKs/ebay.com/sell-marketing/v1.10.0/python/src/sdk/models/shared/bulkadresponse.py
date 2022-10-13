from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adresponse


@dataclass_json
@dataclass
class BulkAdResponse:
    responses: Optional[List[adresponse.AdResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    
