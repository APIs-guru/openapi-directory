from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class AndroidpublisherEditsApklistingsDeletePathParams:
    apk_version_code: int = field(default=None, metadata={'path_param': { 'field_name': 'apkVersionCode', 'style': 'simple', 'explode': False }})
    edit_id: str = field(default=None, metadata={'path_param': { 'field_name': 'editId', 'style': 'simple', 'explode': False }})
    language: str = field(default=None, metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AndroidpublisherEditsApklistingsDeleteQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AndroidpublisherEditsApklistingsDeleteSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AndroidpublisherEditsApklistingsDeleteRequest:
    path_params: AndroidpublisherEditsApklistingsDeletePathParams = field(default=None)
    query_params: AndroidpublisherEditsApklistingsDeleteQueryParams = field(default=None)
    security: AndroidpublisherEditsApklistingsDeleteSecurity = field(default=None)
    

@dataclass
class AndroidpublisherEditsApklistingsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
