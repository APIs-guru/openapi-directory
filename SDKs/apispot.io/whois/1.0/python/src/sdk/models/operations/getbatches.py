from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetBatchesResponse:
    array_of_batch: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
