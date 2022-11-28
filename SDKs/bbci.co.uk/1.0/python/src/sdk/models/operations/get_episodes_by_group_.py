from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetEpisodesByGroupPathParams:
    pid: str = field(metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEpisodesByGroupQueryParams:
    availability: shared.AvailabilityEnum = field(metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    initial_child_count: int = field(metadata={'query_param': { 'field_name': 'initial_child_count', 'style': 'form', 'explode': True }})
    page: int = field(metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: int = field(metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    sort: str = field(metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    sort_direction: shared.SortDirectionEnum = field(metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    mixin: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mixin', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEpisodesByGroupRequest:
    path_params: GetEpisodesByGroupPathParams = field()
    query_params: GetEpisodesByGroupQueryParams = field()
    

@dataclass
class GetEpisodesByGroupResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
