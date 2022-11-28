from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAccessKeyInfoResponse:
    account: Optional[str] = field(default=None)
    
