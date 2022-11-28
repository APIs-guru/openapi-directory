from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EmojisGetResponse:
    content_type: str = field()
    status_code: int = field()
    emojis_get_200_application_json_object: Optional[dict[str, str]] = field(default=None)
    
