from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AndroidpublisherEditsTracksGetPathParams:
    edit_id: str = field(metadata={'path_param': { 'field_name': 'editId', 'style': 'simple', 'explode': False }})
    package_name: str = field(metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    track: str = field(metadata={'path_param': { 'field_name': 'track', 'style': 'simple', 'explode': False }})
    

@dataclass
class AndroidpublisherEditsTracksGetQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AndroidpublisherEditsTracksGetSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AndroidpublisherEditsTracksGetRequest:
    path_params: AndroidpublisherEditsTracksGetPathParams = field()
    query_params: AndroidpublisherEditsTracksGetQueryParams = field()
    security: AndroidpublisherEditsTracksGetSecurity = field()
    

@dataclass
class AndroidpublisherEditsTracksGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
