from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetLinuxHostingsQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLinuxHostingsRequest:
    query_params: GetLinuxHostingsQueryParams = field()
    

@dataclass
class GetLinuxHostingsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    linux_hostings: Optional[List[shared.LinuxHosting]] = field(default=None)
    
