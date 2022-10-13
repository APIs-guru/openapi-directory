from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDriverPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDriverQueryParams:
    include_group: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_group', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    include_tokens: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_tokens', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDriverRequest:
    path_params: GetDriverPathParams = field(default=None)
    query_params: GetDriverQueryParams = field(default=None)
    

@dataclass
class GetDriverResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
