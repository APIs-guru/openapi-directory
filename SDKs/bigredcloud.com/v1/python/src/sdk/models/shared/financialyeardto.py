from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FinancialYearDto:
    first_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstMonth') }})
    start_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startMonth') }})
    start_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startYear') }})
    
