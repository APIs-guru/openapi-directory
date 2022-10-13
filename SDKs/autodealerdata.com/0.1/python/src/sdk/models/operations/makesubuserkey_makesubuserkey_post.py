from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class MakeSubUserKeyMakeSubUserKeyPostQueryParams:
    api_id: str = field(default=None, metadata={'query_param': { 'field_name': 'apiID', 'style': 'form', 'explode': True }})
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    site_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'siteName', 'style': 'form', 'explode': True }})
    

@dataclass
class MakeSubUserKeyMakeSubUserKeyPostRequest:
    query_params: MakeSubUserKeyMakeSubUserKeyPostQueryParams = field(default=None)
    request: shared.EndpointList = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MakeSubUserKeyMakeSubUserKeyPostResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    sub_user_json_web_token: Optional[shared.SubUserJSONWebToken] = field(default=None)
    
