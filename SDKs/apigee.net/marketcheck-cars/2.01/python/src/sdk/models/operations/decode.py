from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DecodePathParams:
    vin: str = field(metadata={'path_param': { 'field_name': 'vin', 'style': 'simple', 'explode': False }})
    

@dataclass
class DecodeQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class DecodeRequest:
    path_params: DecodePathParams = field()
    query_params: DecodeQueryParams = field()
    

@dataclass
class DecodeResponse:
    content_type: str = field()
    status_code: int = field()
    build: Optional[shared.Build] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
