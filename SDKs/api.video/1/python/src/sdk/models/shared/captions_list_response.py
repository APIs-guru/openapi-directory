from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subtitle
from . import pagination


@dataclass_json
@dataclass
class CaptionsListResponse:
    data: Optional[List[subtitle.Subtitle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    pagination: Optional[pagination.Pagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
