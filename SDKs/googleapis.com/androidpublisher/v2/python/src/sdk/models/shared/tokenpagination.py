from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TokenPagination:
    next_page_token: Optional[str] = field(default=None)
    previous_page_token: Optional[str] = field(default=None)
    
