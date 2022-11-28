from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CohortGroup:
    r"""CohortGroup
    Defines a cohort group. For example: \"cohortGroup\": { \"cohorts\": [{ \"name\": \"cohort 1\", \"type\": \"FIRST_VISIT_DATE\", \"dateRange\": { \"startDate\": \"2015-08-01\", \"endDate\": \"2015-08-01\" } },{ \"name\": \"cohort 2\" \"type\": \"FIRST_VISIT_DATE\" \"dateRange\": { \"startDate\": \"2015-07-01\", \"endDate\": \"2015-07-01\" } }] }
    """
    
    cohorts: Optional[List[Cohort]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cohorts') }})
    lifetime_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lifetimeValue') }})
    
