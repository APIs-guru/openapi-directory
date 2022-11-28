from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser


@dataclass
class SourceMapsCreateOrUpdatePathParams:
    log_id: str = field(metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript:
    minified_java_script: str = field(metadata={'multipart_form': { 'field_name': 'MinifiedJavaScript' }})
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    

@dataclass
class SourceMapsCreateOrUpdateRequestBodySourceMap:
    source_map: str = field(metadata={'multipart_form': { 'field_name': 'SourceMap' }})
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    

@dataclass
class SourceMapsCreateOrUpdateRequestBody:
    minified_java_script: SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript = field(metadata={'multipart_form': { 'file': True }})
    path: str = field(metadata={'multipart_form': { 'field_name': 'Path' }})
    source_map: SourceMapsCreateOrUpdateRequestBodySourceMap = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class SourceMapsCreateOrUpdateRequest:
    path_params: SourceMapsCreateOrUpdatePathParams = field()
    request: SourceMapsCreateOrUpdateRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SourceMapsCreateOrUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    
