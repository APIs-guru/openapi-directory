from dataclasses import dataclass, field
from typing import Optional


@dataclass
class LegalNoticeResponse:
    content_type: str = field(default=None)
    legal_notice_200_text_plain_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
