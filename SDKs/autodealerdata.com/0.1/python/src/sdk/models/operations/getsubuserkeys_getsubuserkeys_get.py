from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubUserKeysGetSubUserKeysGetQueryParams:
    api_id: str = field(default=None, metadata={'query_param': { 'field_name': 'apiID', 'style': 'form', 'explode': True }})
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubUserKeysGetSubUserKeysGetRequest:
    query_params: GetSubUserKeysGetSubUserKeysGetQueryParams = field(default=None)
    

@dataclass
class GetSubUserKeysGetSubUserKeysGetResponse:
    content_type: str = field(default=None)
    generic_response: Optional[shared.GenericResponse] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
