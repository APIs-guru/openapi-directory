from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DateRange:
    r"""DateRange
    A date range for the date filter.
    """
    
    unit: Optional[DateRangeUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
