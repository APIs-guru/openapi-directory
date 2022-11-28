from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BookTranTypesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_book_tran_type_dto_: Optional[shared.PageResultBookTranTypeDto] = field(default=None)
    
