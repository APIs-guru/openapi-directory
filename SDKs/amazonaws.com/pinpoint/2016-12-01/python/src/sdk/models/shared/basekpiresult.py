from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import resultrow


@dataclass_json
@dataclass
class BaseKpiResult:
    rows: List[resultrow.ResultRow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rows' }})
    
