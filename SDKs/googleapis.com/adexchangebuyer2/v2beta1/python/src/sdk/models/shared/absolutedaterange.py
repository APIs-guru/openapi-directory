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
class AbsoluteDateRange:
    r"""AbsoluteDateRange
    An absolute date range, specified by its start date and end date. The supported range of dates begins 30 days before today and ends today. Validity checked upon filter set creation. If a filter set with an absolute date range is run at a later date more than 30 days after start_date, it will fail.
    """
    
    end_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    start_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    
