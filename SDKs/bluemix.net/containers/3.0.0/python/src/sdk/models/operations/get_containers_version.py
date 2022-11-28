from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContainersVersionResponse:
    content_type: str = field()
    status_code: int = field()
    containers_version_get_info: Optional[Any] = field(default=None)
    
