from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FetchFieldsQueryParams:
    field_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fieldName', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchFieldsHeaders:
    x_limit: Optional[int] = field(default=None, metadata={'header': { 'field_name': 'X-Limit', 'style': 'simple', 'explode': False }})
    x_next_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Next-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFieldsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchFieldsRequest:
    headers: FetchFieldsHeaders = field()
    query_params: FetchFieldsQueryParams = field()
    security: FetchFieldsSecurity = field()
    

@dataclass
class FetchFieldsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    fields: Optional[Any] = field(default=None)
    
