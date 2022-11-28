from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSectionsForSchoolPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSectionsForSchoolQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    where: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSectionsForSchoolRequest:
    path_params: GetSectionsForSchoolPathParams = field()
    query_params: GetSectionsForSchoolQueryParams = field()
    

@dataclass
class GetSectionsForSchoolResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    sections_response: Optional[shared.SectionsResponse] = field(default=None)
    
