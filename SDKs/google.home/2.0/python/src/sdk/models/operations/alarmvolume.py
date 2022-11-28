from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AlarmVolumeRequest:
    request: shared.AlarmVolumeRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AlarmVolumeResponse:
    content_type: str = field()
    status_code: int = field()
    getvolume: Optional[shared.Getvolume] = field(default=None)
    
