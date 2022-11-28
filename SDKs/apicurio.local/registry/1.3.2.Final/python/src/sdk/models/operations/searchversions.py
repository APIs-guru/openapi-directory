from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchVersionsPathParams:
    artifact_id: str = field(metadata={'path_param': { 'field_name': 'artifactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchVersionsQueryParams:
    limit: int = field(metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: int = field(metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchVersionsRequest:
    path_params: SearchVersionsPathParams = field()
    query_params: SearchVersionsQueryParams = field()
    

@dataclass
class SearchVersionsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    version_search_results: Optional[shared.VersionSearchResults] = field(default=None)
    
