from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetReturningProductionQueryParams:
    conference: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    team: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team', 'style': 'form', 'explode': True }})
    year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReturningProductionRequest:
    query_params: GetReturningProductionQueryParams = field(default=None)
    

@dataclass
class GetReturningProductionResponse:
    content_type: str = field(default=None)
    returning_productions: Optional[List[shared.ReturningProduction]] = field(default=None)
    status_code: int = field(default=None)
    
