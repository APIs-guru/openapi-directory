from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MonthlyActiveUsersForLast30DaysQueryParams:
    app_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_id', 'style': 'form', 'explode': True }})
    ending_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    length: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    

@dataclass
class MonthlyActiveUsersForLast30DaysRequest:
    query_params: MonthlyActiveUsersForLast30DaysQueryParams = field(default=None)
    

@dataclass
class MonthlyActiveUsersForLast30DaysResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
