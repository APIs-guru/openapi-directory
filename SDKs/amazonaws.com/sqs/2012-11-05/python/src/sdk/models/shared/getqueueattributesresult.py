from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQueueAttributesResult:
    r"""GetQueueAttributesResult
    A list of returned queue attributes.
    """
    
    attributes: Optional[dict[str, str]] = field(default=None)
    
