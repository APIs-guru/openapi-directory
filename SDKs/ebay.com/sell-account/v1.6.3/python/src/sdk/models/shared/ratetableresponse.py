from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ratetable


@dataclass_json
@dataclass
class RateTableResponse:
    rate_tables: Optional[List[ratetable.RateTable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateTables' }})
    
