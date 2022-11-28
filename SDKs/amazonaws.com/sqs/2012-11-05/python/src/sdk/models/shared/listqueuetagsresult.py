from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ListQueueTagsResult:
    tags: Optional[dict[str, str]] = field(default=None)
    
