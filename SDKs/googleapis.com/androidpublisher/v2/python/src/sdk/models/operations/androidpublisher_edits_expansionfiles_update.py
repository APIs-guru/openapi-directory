from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared

class AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum(str, Enum):
    MAIN = "main"
    PATCH = "patch"


@dataclass
class AndroidpublisherEditsExpansionfilesUpdatePathParams:
    apk_version_code: int = field(metadata={'path_param': { 'field_name': 'apkVersionCode', 'style': 'simple', 'explode': False }})
    edit_id: str = field(metadata={'path_param': { 'field_name': 'editId', 'style': 'simple', 'explode': False }})
    expansion_file_type: AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum = field(metadata={'path_param': { 'field_name': 'expansionFileType', 'style': 'simple', 'explode': False }})
    package_name: str = field(metadata={'path_param': { 'field_name': 'packageName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AndroidpublisherEditsExpansionfilesUpdateQueryParams:
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclass
class AndroidpublisherEditsExpansionfilesUpdateSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AndroidpublisherEditsExpansionfilesUpdateRequest:
    path_params: AndroidpublisherEditsExpansionfilesUpdatePathParams = field()
    query_params: AndroidpublisherEditsExpansionfilesUpdateQueryParams = field()
    security: AndroidpublisherEditsExpansionfilesUpdateSecurity = field()
    request: Optional[shared.ExpansionFile] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AndroidpublisherEditsExpansionfilesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
