from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Date:
    r"""Date
    Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: A full date, with non-zero year, month, and day values. A month and day, with a zero year (for example, an anniversary). A year on its own, with a zero month and a zero day. A year and month, with a zero day (for example, a credit card expiration date).Related types: google.type.TimeOfDay google.type.DateTime google.protobuf.Timestamp
    """
    
    day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('month') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
