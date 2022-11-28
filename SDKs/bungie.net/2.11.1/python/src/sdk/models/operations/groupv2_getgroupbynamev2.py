from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2GetGroupByNameV2Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
