from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetWindowsHostingsQueryParams:
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    take: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'take', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWindowsHostingsRequest:
    query_params: GetWindowsHostingsQueryParams = field(default=None)
    

@dataclass
class GetWindowsHostingsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    windows_hostings: Optional[List[shared.WindowsHosting]] = field(default=None)
    
