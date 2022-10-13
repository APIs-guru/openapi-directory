from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetOnwardJourneyPathParams:
    pid: str = field(default=None, metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOnwardJourneyQueryParams:
    availability: shared.AvailabilityEnum = field(default=None, metadata={'query_param': { 'field_name': 'availability', 'style': 'form', 'explode': True }})
    rights: shared.RightsEnum = field(default=None, metadata={'query_param': { 'field_name': 'rights', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOnwardJourneyRequest:
    path_params: GetOnwardJourneyPathParams = field(default=None)
    query_params: GetOnwardJourneyQueryParams = field(default=None)
    

@dataclass
class GetOnwardJourneyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ibl: Optional[Any] = field(default=None)
    
