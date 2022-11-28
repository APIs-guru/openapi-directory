from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VatAnalysisTypesGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_vat_analysis_type_dto_: Optional[shared.PageResultVatAnalysisTypeDto] = field(default=None)
    
