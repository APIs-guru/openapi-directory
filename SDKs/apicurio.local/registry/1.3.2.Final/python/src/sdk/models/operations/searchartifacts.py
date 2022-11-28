from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
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
    limit: int = field(metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: int = field(metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[SearchArtifactsOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    over: Optional[SearchArtifactsOverEnum] = field(default=None, metadata={'query_param': { 'field_name': 'over', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchArtifactsRequest:
    query_params: SearchArtifactsQueryParams = field()
    

@dataclass
class SearchArtifactsResponse:
    content_type: str = field()
    status_code: int = field()
    artifact_search_results: Optional[shared.ArtifactSearchResults] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
