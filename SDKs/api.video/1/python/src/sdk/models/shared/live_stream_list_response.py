from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import live_stream
from . import pagination


@dataclass_json
@dataclass
class LiveStreamListResponse:
    data: List[live_stream.LiveStream] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    pagination: pagination.Pagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
