from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PreprocessingBinarizeAdvancedRequestBodyImageFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PreprocessingBinarizeAdvancedRequestBody:
    image_file: PreprocessingBinarizeAdvancedRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PreprocessingBinarizeAdvancedSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PreprocessingBinarizeAdvancedRequest:
    request: PreprocessingBinarizeAdvancedRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PreprocessingBinarizeAdvancedSecurity = field()
    

@dataclass
class PreprocessingBinarizeAdvancedResponse:
    content_type: str = field()
    status_code: int = field()
    preprocessing_binarize_advanced_200_application_json_byte_string: Optional[str] = field(default=None)
    preprocessing_binarize_advanced_200_application_xml_byte_string: Optional[str] = field(default=None)
    preprocessing_binarize_advanced_200_text_json_byte_string: Optional[str] = field(default=None)
    preprocessing_binarize_advanced_200_text_xml_byte_string: Optional[str] = field(default=None)
    
