from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PreprocessingUnskewRequestBodyImageFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PreprocessingUnskewRequestBody:
    image_file: PreprocessingUnskewRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PreprocessingUnskewSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PreprocessingUnskewRequest:
    request: PreprocessingUnskewRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PreprocessingUnskewSecurity = field()
    

@dataclass
class PreprocessingUnskewResponse:
    content_type: str = field()
    status_code: int = field()
    preprocessing_unskew_200_application_json_byte_string: Optional[str] = field(default=None)
    preprocessing_unskew_200_application_xml_byte_string: Optional[str] = field(default=None)
    preprocessing_unskew_200_text_json_byte_string: Optional[str] = field(default=None)
    preprocessing_unskew_200_text_xml_byte_string: Optional[str] = field(default=None)
    
