from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class InvoicesSortByEnum(str, Enum):
    UPDATED_AT = "updated_at"


@dataclass
class InvoicesSort:
    by: Optional[InvoicesSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[shared.SortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
