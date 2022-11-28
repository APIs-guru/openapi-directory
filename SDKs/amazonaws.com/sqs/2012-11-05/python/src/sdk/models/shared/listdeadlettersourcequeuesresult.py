from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ListDeadLetterSourceQueuesResult:
    r"""ListDeadLetterSourceQueuesResult
    A list of your dead letter source queues.
    """
    
    queue_urls: List[str] = field()
    next_token: Optional[str] = field(default=None)
    
