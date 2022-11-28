from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetContainersJSONQueryParams:
    all: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    filters: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    

@dataclass
class GetContainersJSONHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersJSONRequest:
    headers: GetContainersJSONHeaders = field()
    query_params: GetContainersJSONQueryParams = field()
    

@dataclass
class GetContainersJSONResponse:
    content_type: str = field()
    status_code: int = field()
    containers: Optional[List[Any]] = field(default=None)
    
