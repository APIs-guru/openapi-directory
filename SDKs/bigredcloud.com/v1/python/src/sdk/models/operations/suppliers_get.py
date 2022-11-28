from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SuppliersGetResponse:
    content_type: str = field()
    status_code: int = field()
    page_result_supplier_query_dto_: Optional[shared.PageResultSupplierQueryDto] = field(default=None)
    
