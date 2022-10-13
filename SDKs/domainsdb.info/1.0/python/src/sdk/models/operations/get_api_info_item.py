from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIInfoItemQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIInfoItemRequest:
    query_params: GetAPIInfoItemQueryParams = field(default=None)
    

@dataclass
class GetAPIInfoItemResponse:
    api_key_info: Optional[shared.APIKeyInfo] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
