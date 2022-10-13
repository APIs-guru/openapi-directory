from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListingFinance:
    down_payment: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'down_payment' }})
    down_payment_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'down_payment_percentage' }})
    estimated_monthly_payment: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimated_monthly_payment' }})
    loan_apr: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loan_apr' }})
    loan_term: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loan_term' }})
    
