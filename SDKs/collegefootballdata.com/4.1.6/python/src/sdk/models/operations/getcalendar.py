from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCalendarQueryParams:
    year: int = field(metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCalendarRequest:
    query_params: GetCalendarQueryParams = field()
    

@dataclass
class GetCalendarResponse:
    content_type: str = field()
    status_code: int = field()
    weeks: Optional[List[shared.Week]] = field(default=None)
    
