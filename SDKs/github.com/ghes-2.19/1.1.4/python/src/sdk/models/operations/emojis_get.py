from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EmojisGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    emojis_get_200_application_json_object: Optional[dict[str, str]] = field(default=None)
    
