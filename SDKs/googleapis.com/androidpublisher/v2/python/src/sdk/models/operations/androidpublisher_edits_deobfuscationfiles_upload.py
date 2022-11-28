from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum(str, Enum):
    NATIVE_CODE = "nativeCode"
    PROGUARD = "proguard"


@dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadPathParams:
    apk_version_code: int = field(metadata={'path_param': { 'field_name': 'apkVersionCode', 'style': 'simple', 'explode': False }})
    deobfuscation_file_type: AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum = field(metadata={'path_param': { 'field_name': 'deobfuscationFileType', 'style': 'simple', 'explode': False }})
    edit_id: str = field(metadata={'path_param': { 'field_name': 'editId', 'style': 'simple', 'explode': False }})
    package_name: str = field(metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadRequest:
    path_params: AndroidpublisherEditsDeobfuscationfilesUploadPathParams = field()
    query_params: AndroidpublisherEditsDeobfuscationfilesUploadQueryParams = field()
    security: AndroidpublisherEditsDeobfuscationfilesUploadSecurity = field()
    

@dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
