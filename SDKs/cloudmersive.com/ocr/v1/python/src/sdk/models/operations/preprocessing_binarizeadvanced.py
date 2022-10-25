from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PreprocessingBinarizeAdvancedRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PreprocessingBinarizeAdvancedRequestBody:
    image_file: PreprocessingBinarizeAdvancedRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PreprocessingBinarizeAdvancedSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PreprocessingBinarizeAdvancedRequest:
    request: PreprocessingBinarizeAdvancedRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PreprocessingBinarizeAdvancedSecurity = field(default=None)
    

@dataclass
class PreprocessingBinarizeAdvancedResponse:
    content_type: str = field(default=None)
    preprocessing_binarize_advanced_200_application_json_byte_string: Optional[str] = field(default=None)
    preprocessing_binarize_advanced_200_application_xml_byte_string: Optional[str] = field(default=None)
    preprocessing_binarize_advanced_200_text_json_byte_string: Optional[str] = field(default=None)
    preprocessing_binarize_advanced_200_text_xml_byte_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
