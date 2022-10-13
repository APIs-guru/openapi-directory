from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import daterange
from . import localizationsettings


@dataclass_json
@dataclass
class ReportHeader:
    date_range: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRange' }})
    localization_settings: Optional[localizationsettings.LocalizationSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizationSettings' }})
    reporting_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportingTimeZone' }})
    
