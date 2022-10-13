from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContainersVersionResponse:
    containers_version_get_info: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
