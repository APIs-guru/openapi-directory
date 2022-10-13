from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InvoiceResponse:
    downstream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downstream_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
