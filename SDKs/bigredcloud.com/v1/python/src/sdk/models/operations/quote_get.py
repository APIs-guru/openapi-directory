from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class QuoteGetResponse:
    content_type: str = field(default=None)
    page_result_quote_dto_: Optional[shared.PageResultQuoteDto] = field(default=None)
    status_code: int = field(default=None)
    
