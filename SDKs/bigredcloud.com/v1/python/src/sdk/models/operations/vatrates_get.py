from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VatRatesGetResponse:
    content_type: str = field(default=None)
    page_result_vat_rate_dto_: Optional[shared.PageResultVatRateDto] = field(default=None)
    status_code: int = field(default=None)
    
