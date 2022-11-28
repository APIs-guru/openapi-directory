from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetOnwardJourneyPathParams:
    pid: str = field(metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOnwardJourneyQueryParams:
    availability: shared.AvailabilityEnum = field(metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOnwardJourneyRequest:
    path_params: GetOnwardJourneyPathParams = field()
    query_params: GetOnwardJourneyQueryParams = field()
    

@dataclass
class GetOnwardJourneyResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
