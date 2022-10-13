from dataclasses import dataclass, field



@dataclass
class SourceMapsCreateOrUpdatePathParams:
    log_id: str = field(default=None, metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript:
    minified_java_script: str = field(default=None, metadata={'multipart_form': { 'field_name': 'MinifiedJavaScript' }})
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    

@dataclass
class SourceMapsCreateOrUpdateRequestBodySourceMap:
    source_map: str = field(default=None, metadata={'multipart_form': { 'field_name': 'SourceMap' }})
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    

@dataclass
class SourceMapsCreateOrUpdateRequestBody:
    minified_java_script: SourceMapsCreateOrUpdateRequestBodyMinifiedJavaScript = field(default=None, metadata={'multipart_form': { 'file': True }})
    path: str = field(default=None, metadata={'multipart_form': { 'field_name': 'Path' }})
    source_map: SourceMapsCreateOrUpdateRequestBodySourceMap = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class SourceMapsCreateOrUpdateRequest:
    path_params: SourceMapsCreateOrUpdatePathParams = field(default=None)
    request: SourceMapsCreateOrUpdateRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SourceMapsCreateOrUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
