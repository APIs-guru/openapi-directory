from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import live_stream_session
from . import pagination


@dataclass_json
@dataclass
class RawStatisticsListLiveStreamAnalyticsResponse:
    data: Optional[List[live_stream_session.LiveStreamSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    pagination: Optional[pagination.Pagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
