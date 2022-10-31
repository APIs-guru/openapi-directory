from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetContainersJSONQueryParams:
    all: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    filters: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filters', 'style': 'form', 'explode': True }})
    

@dataclass
class GetContainersJSONHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersJSONRequest:
    query_params: GetContainersJSONQueryParams = field(default=None)
    headers: GetContainersJSONHeaders = field(default=None)
    

@dataclass
class GetContainersJSONResponse:
    containers: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
