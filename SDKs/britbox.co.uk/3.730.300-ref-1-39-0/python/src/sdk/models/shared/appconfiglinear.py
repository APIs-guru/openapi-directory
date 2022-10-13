from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppConfigLinear:
    schedule_cache_max_age_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleCacheMaxAgeMinutes' }})
    viewing_window_days_after: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewingWindowDaysAfter' }})
    viewing_window_days_before: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewingWindowDaysBefore' }})
    
