from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIInfoItemQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIInfoItemRequest:
    query_params: GetAPIInfoItemQueryParams = field()
    

@dataclass
class GetAPIInfoItemResponse:
    content_type: str = field()
    status_code: int = field()
    api_key_info: Optional[shared.APIKeyInfo] = field(default=None)
    
