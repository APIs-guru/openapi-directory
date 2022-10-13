from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetSpacesByIdsQueryParams:
    ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpacesByIdsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSpacesByIdsRequest:
    query_params: GetSpacesByIdsQueryParams = field(default=None)
    security: GetSpacesByIdsSecurity = field(default=None)
    

@dataclass
class GetSpacesByIdsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_spaces_result: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
