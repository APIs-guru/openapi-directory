from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import player_session_event
from . import pagination


@dataclass_json
@dataclass
class RawStatisticsListPlayerSessionEventsResponse:
    data: Optional[List[player_session_event.PlayerSessionEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    pagination: Optional[pagination.Pagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    
