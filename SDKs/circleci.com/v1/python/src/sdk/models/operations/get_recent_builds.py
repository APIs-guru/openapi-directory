from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRecentBuildsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRecentBuildsRequest:
    query_params: GetRecentBuildsQueryParams = field()
    

@dataclass
class GetRecentBuildsResponse:
    content_type: str = field()
    status_code: int = field()
    builds: Optional[List[shared.Build]] = field(default=None)
    
