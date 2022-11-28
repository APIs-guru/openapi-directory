from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EmailQuoteDto:
    bcc_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bccAddresses') }})
    message_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageBody') }})
    quote_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteId') }})
    to_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toAddress') }})
    
