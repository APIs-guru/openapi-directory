from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QuoteGeneratingInvoiceDto:
    quote_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteId') }})
    sale_invoice: Optional[SalesInvoiceCreditNoteDto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saleInvoice') }})
    
