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
class Cohort:
    r"""Cohort
    Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same `firstSessionDate` belong to the same cohort.
    """
    
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    dimension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimension') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
