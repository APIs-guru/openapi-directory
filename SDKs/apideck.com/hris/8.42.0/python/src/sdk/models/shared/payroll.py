from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class Payroll:
    check_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'check_date' }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_id' }})
    compensations: Optional[List[shared.Compensation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compensations' }})
    end_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_date' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    processed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processed' }})
    processed_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processed_date' }})
    start_date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_date' }})
    totals: Optional[shared.PayrollTotals] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totals' }})
    
