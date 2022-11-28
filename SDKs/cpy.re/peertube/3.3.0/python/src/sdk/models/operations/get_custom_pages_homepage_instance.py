from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCustomPagesHomepageInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    custom_homepage: Optional[Any] = field(default=None)
    
