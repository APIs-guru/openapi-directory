from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum(str, Enum):
    MAIN = "main"
    PATCH = "patch"


@dataclass
class AndroidpublisherEditsExpansionfilesUploadPathParams:
    apk_version_code: int = field(default=None, metadata={'path_param': { 'field_name': 'apkVersionCode', 'style': 'simple', 'explode': False }})
    edit_id: str = field(default=None, metadata={'path_param': { 'field_name': 'editId', 'style': 'simple', 'explode': False }})
    expansion_file_type: AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'expansionFileType', 'style': 'simple', 'explode': False }})
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AndroidpublisherEditsExpansionfilesUploadQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AndroidpublisherEditsExpansionfilesUploadSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AndroidpublisherEditsExpansionfilesUploadRequest:
    path_params: AndroidpublisherEditsExpansionfilesUploadPathParams = field(default=None)
    query_params: AndroidpublisherEditsExpansionfilesUploadQueryParams = field(default=None)
    security: AndroidpublisherEditsExpansionfilesUploadSecurity = field(default=None)
    

@dataclass
class AndroidpublisherEditsExpansionfilesUploadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
