from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SuppliersGetResponse:
    content_type: str = field(default=None)
    page_result_supplier_query_dto_: Optional[shared.PageResultSupplierQueryDto] = field(default=None)
    status_code: int = field(default=None)
    
