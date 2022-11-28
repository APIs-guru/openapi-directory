from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostFilesPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostFilesPathRequestBody:
    etags_etag_: List[str] = field(metadata={'multipart_form': { 'field_name': 'etags[etag]' }})
    etags_part_: List[int] = field(metadata={'multipart_form': { 'field_name': 'etags[part]' }})
    action: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'action' }})
    length: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'length' }})
    mkdir_parents: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'mkdir_parents' }})
    part: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'part' }})
    parts: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'parts' }})
    provided_mtime: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'provided_mtime' }})
    ref: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ref' }})
    restart: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'restart' }})
    size: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'size' }})
    structure: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'structure' }})
    with_rename: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'with_rename' }})
    

@dataclass
class PostFilesPathRequest:
    path_params: PostFilesPathPathParams = field()
    request: Optional[PostFilesPathRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostFilesPathResponse:
    content_type: str = field()
    status_code: int = field()
    file_entity: Optional[shared.FileEntity] = field(default=None)
    
