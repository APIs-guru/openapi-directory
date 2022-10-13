from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import importjobresponse


@dataclass_json
@dataclass
class ImportJobsResponse:
    item: List[importjobresponse.ImportJobResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Item' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
