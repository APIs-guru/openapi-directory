from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV3AssetChangesChannelsResponse:
    channels: Optional[List[shared.Channel]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
