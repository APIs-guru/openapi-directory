from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetEpisodesByParentPidPathParams:
    pid: str = field(metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEpisodesByParentPidQueryParams:
    availability: shared.AvailabilityEnum = field(metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    initial_child_count: int = field(metadata={'query_param': { 'field_name': 'initial_child_count', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEpisodesByParentPidRequest:
    path_params: GetEpisodesByParentPidPathParams = field()
    query_params: GetEpisodesByParentPidQueryParams = field()
    

@dataclass
class GetEpisodesByParentPidResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
