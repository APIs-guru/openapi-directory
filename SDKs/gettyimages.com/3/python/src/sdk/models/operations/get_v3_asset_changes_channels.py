from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV3AssetChangesChannelsResponse:
    content_type: str = field()
    status_code: int = field()
    channels: Optional[List[shared.Channel]] = field(default=None)
    
