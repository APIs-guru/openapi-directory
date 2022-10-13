from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCustomPagesHomepageInstanceResponse:
    content_type: str = field(default=None)
    custom_homepage: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
