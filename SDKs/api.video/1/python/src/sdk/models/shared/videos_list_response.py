from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import video
from . import pagination


@dataclass_json
@dataclass
class VideosListResponse:
    data: List[video.Video] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    pagination: pagination.Pagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
