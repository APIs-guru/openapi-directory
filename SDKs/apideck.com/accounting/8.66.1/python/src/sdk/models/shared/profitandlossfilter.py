from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProfitAndLossFilter:
    customer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'customer_id' }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date' }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date' }})
    
