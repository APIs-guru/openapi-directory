from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CreatePinRequestQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class CreatePinRequestRequest:
    query_params: CreatePinRequestQueryParams = field(default=None)
    request: shared.EeCreatePinRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePinRequestResponse:
    content_type: str = field(default=None)
    ee_create_pin_response: Optional[shared.EeCreatePinResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
