from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Price:
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    price_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priceMicros' }})
    
