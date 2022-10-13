from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmailQuoteDto:
    bcc_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bccAddresses' }})
    message_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageBody' }})
    quote_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quoteId' }})
    to_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toAddress' }})
    
