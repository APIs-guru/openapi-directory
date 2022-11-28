from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PreprocessingGetPageAngleRequestBodyImageFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    image_file: str = field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclass
class PreprocessingGetPageAngleRequestBody:
    image_file: PreprocessingGetPageAngleRequestBodyImageFile = field(metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PreprocessingGetPageAngleSecurity:
    apikey: shared.SchemeApikey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PreprocessingGetPageAngleRequest:
    request: PreprocessingGetPageAngleRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PreprocessingGetPageAngleSecurity = field()
    

@dataclass
class PreprocessingGetPageAngleResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_page_angle_result: Optional[shared.GetPageAngleResult] = field(default=None)
    
