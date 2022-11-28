from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetProgrammeByPidPathParams:
    pid: str = field(metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProgrammeByPidQueryParams:
    availability: shared.AvailabilityEnum = field(metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    mixin: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'mixin', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProgrammeByPidRequest:
    path_params: GetProgrammeByPidPathParams = field()
    query_params: GetProgrammeByPidQueryParams = field()
    

@dataclass
class GetProgrammeByPidResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
