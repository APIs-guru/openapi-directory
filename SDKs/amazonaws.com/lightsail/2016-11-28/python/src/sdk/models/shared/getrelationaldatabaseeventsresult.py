from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import relationaldatabaseevent


@dataclass_json
@dataclass
class GetRelationalDatabaseEventsResult:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    relational_database_events: Optional[List[relationaldatabaseevent.RelationalDatabaseEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseEvents' }})
    
