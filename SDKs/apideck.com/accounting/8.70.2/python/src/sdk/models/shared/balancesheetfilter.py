from dataclasses import dataclass, field
from typing import Optional


@dataclass
class BalanceSheetFilter:
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date' }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date' }})
    
