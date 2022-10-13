from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import quotedto


@dataclass_json
@dataclass
class BatchItemQuoteDto:
    item: Optional[quotedto.QuoteDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    op_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opCode' }})
    
