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
class DateRange:
    r"""DateRange
    Specification of a single date range. Both dates are inclusive.
    """
    
    end_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    start_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    
