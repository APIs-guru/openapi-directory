from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class QuoteGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_quote_dto_: Optional[shared.PageResultQuoteDto] = field(default=None)
    
