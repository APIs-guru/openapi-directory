from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestInternetDownloadSpeedRequest:
    request: shared.TestInternetDownloadSpeedRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestInternetDownloadSpeedResponse:
    content_type: str = field(default=None)
    example16: Optional[shared.Example16] = field(default=None)
    status_code: int = field(default=None)
    
