from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PageInfo:
    result_per_page: Optional[int] = field(default=None)
    start_index: Optional[int] = field(default=None)
    total_results: Optional[int] = field(default=None)
    
