from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deleteadresponse


@dataclass_json
@dataclass
class BulkDeleteAdResponse:
    responses: Optional[List[deleteadresponse.DeleteAdResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    
