from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CreateQueueResult:
    r"""CreateQueueResult
    Returns the <code>QueueUrl</code> attribute of the created queue.
    """
    
    queue_url: Optional[str] = field(default=None)
    
