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
class Payroll:
    check_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('check_date') }})
    end_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    processed: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('processed') }})
    start_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_id') }})
    compensations: Optional[List[Compensation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compensations') }})
    processed_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processed_date') }})
    totals: Optional[PayrollTotals] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totals') }})
    
