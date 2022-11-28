from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AdsensehostAccountsAdunitsPatchPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    ad_client_id: str = field(metadata={'path_param': { 'field_name': 'adClientId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AdsensehostAccountsAdunitsPatchQueryParams:
    ad_unit_id: str = field(metadata={'query_param': { 'field_name': 'adUnitId', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AdsensehostAccountsAdunitsPatchSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AdsensehostAccountsAdunitsPatchRequest:
    path_params: AdsensehostAccountsAdunitsPatchPathParams = field()
    query_params: AdsensehostAccountsAdunitsPatchQueryParams = field()
    security: AdsensehostAccountsAdunitsPatchSecurity = field()
    request: Optional[shared.AdUnit] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AdsensehostAccountsAdunitsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    ad_unit: Optional[shared.AdUnit] = field(default=None)
    
