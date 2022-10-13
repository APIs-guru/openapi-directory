from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CalendarDate:
    all_day: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'all_day' }})
    calendar_category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendar_category_id' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date' }})
    event_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_id' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date' }})
    state: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
