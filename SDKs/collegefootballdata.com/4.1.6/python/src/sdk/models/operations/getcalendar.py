from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCalendarQueryParams:
    year: int = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCalendarRequest:
    query_params: GetCalendarQueryParams = field(default=None)
    

@dataclass
class GetCalendarResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    weeks: Optional[List[shared.Week]] = field(default=None)
    
