from dataclasses import dataclass, field
from typing import Enum,Optional
from . import sortdirection_enum

class InvoicesSortByEnum(str, Enum):
    UPDATED_AT = "updated_at"


@dataclass
class InvoicesSort:
    by: Optional[InvoicesSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[sortdirection_enum.SortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
