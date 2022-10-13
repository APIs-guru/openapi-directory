from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class SearchArtifactsOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class SearchArtifactsOverEnum(str, Enum):
    EVERYTHING = "everything"
    NAME = "name"
    DESCRIPTION = "description"
    LABELS = "labels"


@dataclass
class SearchArtifactsQueryParams:
    limit: int = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: int = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[SearchArtifactsOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    over: Optional[SearchArtifactsOverEnum] = field(default=None, metadata={'query_param': { 'field_name': 'over', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchArtifactsRequest:
    query_params: SearchArtifactsQueryParams = field(default=None)
    

@dataclass
class SearchArtifactsResponse:
    artifact_search_results: Optional[shared.ArtifactSearchResults] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
