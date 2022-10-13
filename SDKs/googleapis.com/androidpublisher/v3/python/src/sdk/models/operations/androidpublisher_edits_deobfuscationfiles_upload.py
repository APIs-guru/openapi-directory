from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum(str, Enum):
    DEOBFUSCATION_FILE_TYPE_UNSPECIFIED = "deobfuscationFileTypeUnspecified"
    PROGUARD = "proguard"
    NATIVE_CODE = "nativeCode"


@dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadPathParams:
    apk_version_code: int = field(default=None, metadata={'path_param': { 'field_name': 'apkVersionCode', 'style': 'simple', 'explode': False }})
    deobfuscation_file_type: AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'deobfuscationFileType', 'style': 'simple', 'explode': False }})
    edit_id: str = field(default=None, metadata={'path_param': { 'field_name': 'editId', 'style': 'simple', 'explode': False }})
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadRequest:
    path_params: AndroidpublisherEditsDeobfuscationfilesUploadPathParams = field(default=None)
    query_params: AndroidpublisherEditsDeobfuscationfilesUploadQueryParams = field(default=None)
    security: AndroidpublisherEditsDeobfuscationfilesUploadSecurity = field(default=None)
    

@dataclass
class AndroidpublisherEditsDeobfuscationfilesUploadResponse:
    content_type: str = field(default=None)
    deobfuscation_files_upload_response: Optional[shared.DeobfuscationFilesUploadResponse] = field(default=None)
    status_code: int = field(default=None)
    
