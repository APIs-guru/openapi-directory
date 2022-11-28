from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestInternetDownloadSpeedRequest:
    request: shared.TestInternetDownloadSpeedRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TestInternetDownloadSpeedResponse:
    content_type: str = field()
    status_code: int = field()
    example16: Optional[shared.Example16] = field(default=None)
    
