from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PreprocessingGetPageAngleRequestBodyImageFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    image_file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PreprocessingGetPageAngleRequestBody:
    image_file: PreprocessingGetPageAngleRequestBodyImageFile = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PreprocessingGetPageAngleSecurity:
    apikey: shared.SchemeApikey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PreprocessingGetPageAngleRequest:
    request: PreprocessingGetPageAngleRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PreprocessingGetPageAngleSecurity = field(default=None)
    

@dataclass
class PreprocessingGetPageAngleResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_page_angle_result: Optional[shared.GetPageAngleResult] = field(default=None)
    status_code: int = field(default=None)
    
