from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MergePostRequest:
    request: Optional[shared.MergeRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MergePostResponse:
    content_type: str = field()
    status_code: int = field()
    api_response_failure: Optional[shared.APIResponseFailure] = field(default=None)
    api_response_success: Optional[shared.APIResponseSuccess] = field(default=None)
    
