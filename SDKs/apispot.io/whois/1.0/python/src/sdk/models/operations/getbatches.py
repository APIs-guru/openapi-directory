from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetBatchesResponse:
    content_type: str = field()
    status_code: int = field()
    array_of_batch: Optional[Any] = field(default=None)
    
