from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SalesInvoiceEmailInfoDto:
    bcc_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bccAddresses') }})
    message_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageBody') }})
    sales_invoice_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesInvoiceId') }})
    to_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toAddress') }})
    
