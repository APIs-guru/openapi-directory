from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PreprocessingBinarizeRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PreprocessingBinarizeRequestBody:
    image_file: PreprocessingBinarizeRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PreprocessingBinarizeSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PreprocessingBinarizeRequest:
    request: PreprocessingBinarizeRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PreprocessingBinarizeSecurity = field(default=None)
    

@dataclass
class PreprocessingBinarizeResponse:
    content_type: str = field(default=None)
    preprocessing_binarize_200_application_json_byte_string: Optional[str] = field(default=None)
    preprocessing_binarize_200_application_xml_byte_string: Optional[str] = field(default=None)
    preprocessing_binarize_200_text_json_byte_string: Optional[str] = field(default=None)
    preprocessing_binarize_200_text_xml_byte_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
