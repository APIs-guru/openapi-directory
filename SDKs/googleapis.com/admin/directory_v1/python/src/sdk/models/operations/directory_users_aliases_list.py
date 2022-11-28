from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DirectoryUsersAliasesListPathParams:
    user_key: str = field(metadata={'path_param': { 'field_name': 'userKey', 'style': 'simple', 'explode': False }})
    
class DirectoryUsersAliasesListEventEnum(str, Enum):
    ADD = "add"
    DELETE = "delete"


@dataclass
class DirectoryUsersAliasesListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    event: Optional[DirectoryUsersAliasesListEventEnum] = field(default=None, metadata={'query_param': { 'field_name': 'event', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DirectoryUsersAliasesListSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersAliasesListSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersAliasesListSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersAliasesListSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DirectoryUsersAliasesListSecurity:
    option1: Optional[DirectoryUsersAliasesListSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DirectoryUsersAliasesListSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DirectoryUsersAliasesListSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[DirectoryUsersAliasesListSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DirectoryUsersAliasesListRequest:
    path_params: DirectoryUsersAliasesListPathParams = field()
    query_params: DirectoryUsersAliasesListQueryParams = field()
    security: DirectoryUsersAliasesListSecurity = field()
    

@dataclass
class DirectoryUsersAliasesListResponse:
    content_type: str = field()
    status_code: int = field()
    aliases: Optional[shared.Aliases] = field(default=None)
    
