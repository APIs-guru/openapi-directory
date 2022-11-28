from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetPostRollsPathParams:
    pid: str = field(metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPostRollsQueryParams:
    availability: shared.AvailabilityEnum = field(metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPostRollsRequest:
    path_params: GetPostRollsPathParams = field()
    query_params: GetPostRollsQueryParams = field()
    

@dataclass
class GetPostRollsResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
