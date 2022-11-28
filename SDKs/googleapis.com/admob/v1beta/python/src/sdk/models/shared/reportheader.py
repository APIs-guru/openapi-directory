from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportHeader:
    r"""ReportHeader
    Groups data helps to treat the generated report. Always sent as a first message in the stream response.
    """
    
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    localization_settings: Optional[LocalizationSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizationSettings') }})
    reporting_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportingTimeZone') }})
    
