from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MakeTokenGetTokenPostQueryParams:
    api_id: str = field(default=None, metadata={'query_param': { 'field_name': 'apiID', 'style': 'form', 'explode': True }})
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    

@dataclass
class MakeTokenGetTokenPostRequest:
    query_params: MakeTokenGetTokenPostQueryParams = field(default=None)
    

@dataclass
class MakeTokenGetTokenPostResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    json_web_token: Optional[shared.JSONWebToken] = field(default=None)
    status_code: int = field(default=None)
    
