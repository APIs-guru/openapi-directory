from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MakeTokenGetTokenGetQueryParams:
    api_id: str = field(metadata={'query_param': { 'field_name': 'apiID', 'style': 'form', 'explode': True }})
    api_key: str = field(metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    

@dataclass
class MakeTokenGetTokenGetRequest:
    query_params: MakeTokenGetTokenGetQueryParams = field()
    

@dataclass
class MakeTokenGetTokenGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    json_web_token: Optional[shared.JSONWebToken] = field(default=None)
    
