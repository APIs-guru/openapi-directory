from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import video_session
from . import pagination


@dataclass_json
@dataclass
class RawStatisticsListSessionsResponse:
    data: Optional[List[video_session.VideoSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    pagination: Optional[pagination.Pagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
