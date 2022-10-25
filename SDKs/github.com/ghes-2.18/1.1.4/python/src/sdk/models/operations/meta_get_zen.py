from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MetaGetZenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    meta_get_zen_200_text_plain_string: Optional[str] = field(default=None)
    
