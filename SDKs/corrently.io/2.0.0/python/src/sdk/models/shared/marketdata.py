from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MarketData:
    end_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_timestamp' }})
    marketprice: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketprice' }})
    start_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_timestamp' }})
    
