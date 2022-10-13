from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import salesinvoicecreditnotedto


@dataclass_json
@dataclass
class BatchItemSalesInvoiceCreditNoteDto:
    item: Optional[salesinvoicecreditnotedto.SalesInvoiceCreditNoteDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    op_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opCode' }})
    
