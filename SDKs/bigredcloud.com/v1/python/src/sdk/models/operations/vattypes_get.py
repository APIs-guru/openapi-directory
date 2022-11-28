from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VatTypesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_vat_type_dto_: Optional[shared.PageResultVatTypeDto] = field(default=None)
    
