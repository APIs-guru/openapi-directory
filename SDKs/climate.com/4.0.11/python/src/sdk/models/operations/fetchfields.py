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
class FetchFieldsSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FetchFieldsSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchFieldsSecurity:
    option1: Optional[FetchFieldsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FetchFieldsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FetchFieldsRequest:
    query_params: FetchFieldsQueryParams = field(default=None)
    headers: FetchFieldsHeaders = field(default=None)
    security: FetchFieldsSecurity = field(default=None)
    

@dataclass
class FetchFieldsResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    fields: Optional[Any] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
