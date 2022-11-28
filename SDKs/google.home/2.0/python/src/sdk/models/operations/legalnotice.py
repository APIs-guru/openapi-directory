from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LegalNoticeResponse:
    content_type: str = field()
    status_code: int = field()
    legal_notice_200_text_plain_string: Optional[str] = field(default=None)
    
