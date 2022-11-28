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
class DateFilter:
    r"""DateFilter
    A date filter for querying findings.
    """
    
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DateRange') }})
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('End') }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Start') }})
    
