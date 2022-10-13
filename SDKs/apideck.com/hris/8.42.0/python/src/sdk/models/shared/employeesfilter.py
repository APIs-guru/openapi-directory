from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EmployeesFilter:
    company_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'company_id' }})
    
