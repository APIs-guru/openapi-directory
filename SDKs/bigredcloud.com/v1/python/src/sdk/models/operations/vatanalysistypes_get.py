from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VatAnalysisTypesGetResponse:
    content_type: str = field(default=None)
    page_result_vat_analysis_type_dto_: Optional[shared.PageResultVatAnalysisTypeDto] = field(default=None)
    status_code: int = field(default=None)
    
