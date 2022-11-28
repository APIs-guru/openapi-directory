from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProjectsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectsRequest:
    query_params: GetProjectsQueryParams = field()
    

@dataclass
class GetProjectsResponse:
    content_type: str = field()
    status_code: int = field()
    project_entities: Optional[List[shared.ProjectEntity]] = field(default=None)
    
