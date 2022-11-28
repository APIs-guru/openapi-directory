from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CohortTypeEnum(str, Enum):
    UNSPECIFIED_COHORT_TYPE = "UNSPECIFIED_COHORT_TYPE"
    FIRST_VISIT_DATE = "FIRST_VISIT_DATE"


@dataclass_json
@dataclass
class Cohort:
    r"""Cohort
    Defines a cohort. A cohort is a group of users who share a common characteristic. For example, all users with the same acquisition date belong to the same cohort.
    """
    
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[CohortTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
