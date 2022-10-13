from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetRelationalDatabaseEventsRequest:
    duration_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationInMinutes' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    relational_database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseName' }})
    
