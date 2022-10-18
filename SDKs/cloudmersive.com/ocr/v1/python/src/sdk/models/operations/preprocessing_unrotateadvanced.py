from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PreprocessingUnrotateAdvancedRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PreprocessingUnrotateAdvancedRequestBody:
    image_file: PreprocessingUnrotateAdvancedRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PreprocessingUnrotateAdvancedSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PreprocessingUnrotateAdvancedRequest:
    request: PreprocessingUnrotateAdvancedRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PreprocessingUnrotateAdvancedSecurity = field(default=None)
    

@dataclass
class PreprocessingUnrotateAdvancedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    preprocessing_unrotate_advanced_200_application_json_byte_string: Optional[str] = field(default=None)
    preprocessing_unrotate_advanced_200_text_json_byte_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
