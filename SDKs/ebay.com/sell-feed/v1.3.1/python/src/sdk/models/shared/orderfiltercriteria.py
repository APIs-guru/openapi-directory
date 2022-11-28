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
class OrderFilterCriteria:
    r"""OrderFilterCriteria
    The type that defines the fields for the order filters.
    """
    
    creation_date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDateRange') }})
    modified_date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDateRange') }})
    order_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderStatus') }})
    
