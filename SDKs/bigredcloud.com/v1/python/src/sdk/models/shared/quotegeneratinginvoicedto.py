from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import salesinvoicecreditnotedto


@dataclass_json
@dataclass
class QuoteGeneratingInvoiceDto:
    quote_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quoteId' }})
    sale_invoice: Optional[salesinvoicecreditnotedto.SalesInvoiceCreditNoteDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saleInvoice' }})
    
