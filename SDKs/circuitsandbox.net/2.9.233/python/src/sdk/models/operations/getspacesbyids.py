from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetSpacesByIdsQueryParams:
    ids: List[str] = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpacesByIdsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSpacesByIdsRequest:
    query_params: GetSpacesByIdsQueryParams = field()
    security: GetSpacesByIdsSecurity = field()
    

@dataclass
class GetSpacesByIdsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_spaces_result: Optional[Any] = field(default=None)
    
