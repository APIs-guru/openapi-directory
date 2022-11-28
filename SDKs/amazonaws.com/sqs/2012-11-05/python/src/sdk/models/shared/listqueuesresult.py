from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListQueuesResult:
    r"""ListQueuesResult
    A list of your queues.
    """
    
    next_token: Optional[str] = field(default=None)
    queue_urls: Optional[List[str]] = field(default=None)
    
