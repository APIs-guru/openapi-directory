from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdexchangebuyerAccountsPatchPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdexchangebuyerAccountsPatchQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    confirm_unsafe_account_change: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'confirmUnsafeAccountChange', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdexchangebuyerAccountsPatchSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdexchangebuyerAccountsPatchRequest:
    path_params: AdexchangebuyerAccountsPatchPathParams = field()
    query_params: AdexchangebuyerAccountsPatchQueryParams = field()
    security: AdexchangebuyerAccountsPatchSecurity = field()
    request: Optional[shared.Account] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AdexchangebuyerAccountsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    account: Optional[shared.Account] = field(default=None)
    
