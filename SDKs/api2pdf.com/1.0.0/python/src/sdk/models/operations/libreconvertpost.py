from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LibreConvertPostRequest:
    request: Optional[shared.LibreOfficeConvertRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class LibreConvertPostResponse:
    content_type: str = field()
    status_code: int = field()
    api_response_failure: Optional[shared.APIResponseFailure] = field(default=None)
    api_response_success: Optional[shared.APIResponseSuccess] = field(default=None)
    
