from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CompanyFinancialYearViewModel:
    first_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstMonth' }})
    start_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startMonth' }})
    start_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startYear' }})
    
