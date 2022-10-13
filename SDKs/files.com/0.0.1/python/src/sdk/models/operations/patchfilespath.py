from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PatchFilesPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchFilesPathRequestBody:
    priority_color: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'priority_color' }})
    provided_mtime: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'provided_mtime' }})
    

@dataclass
class PatchFilesPathRequest:
    path_params: PatchFilesPathPathParams = field(default=None)
    request: Optional[PatchFilesPathRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchFilesPathResponse:
    content_type: str = field(default=None)
    file_entity: Optional[shared.FileEntity] = field(default=None)
    status_code: int = field(default=None)
    
