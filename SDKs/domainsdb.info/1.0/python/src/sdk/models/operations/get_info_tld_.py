from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetInfoTldResponse:
    content_type: str = field()
    status_code: int = field()
    zone_infos: Optional[List[shared.ZoneInfo]] = field(default=None)
    
