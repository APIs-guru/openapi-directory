from dataclasses import dataclass, field
from typing import Optional


@dataclass
class QueriesPagedQuery:
    current_page: Optional[int] = field(default=None)
    items_per_page: Optional[int] = field(default=None)
    request_continuation_token: Optional[str] = field(default=None)
    
