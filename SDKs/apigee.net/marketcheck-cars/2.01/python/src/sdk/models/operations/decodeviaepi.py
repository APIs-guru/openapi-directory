from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DecodeViaEpiPathParams:
    vin: str = field(default=None, metadata={'path_param': { 'field_name': 'vin', 'style': 'simple', 'explode': False }})
    

@dataclass
class DecodeViaEpiQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class DecodeViaEpiRequest:
    path_params: DecodeViaEpiPathParams = field(default=None)
    query_params: DecodeViaEpiQueryParams = field(default=None)
    

@dataclass
class DecodeViaEpiResponse:
    build: Optional[shared.Build] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
