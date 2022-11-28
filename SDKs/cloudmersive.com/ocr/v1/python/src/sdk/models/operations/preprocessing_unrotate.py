from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PreprocessingUnrotateRequestBodyImageFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PreprocessingUnrotateRequestBody:
    image_file: PreprocessingUnrotateRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PreprocessingUnrotateSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PreprocessingUnrotateRequest:
    request: PreprocessingUnrotateRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PreprocessingUnrotateSecurity = field()
    

@dataclass
class PreprocessingUnrotateResponse:
    content_type: str = field()
    status_code: int = field()
    preprocessing_unrotate_200_application_json_byte_string: Optional[str] = field(default=None)
    preprocessing_unrotate_200_application_xml_byte_string: Optional[str] = field(default=None)
    preprocessing_unrotate_200_text_json_byte_string: Optional[str] = field(default=None)
    preprocessing_unrotate_200_text_xml_byte_string: Optional[str] = field(default=None)
    
