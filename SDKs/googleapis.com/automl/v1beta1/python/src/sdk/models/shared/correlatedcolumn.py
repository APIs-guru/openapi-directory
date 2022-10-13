from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import correlationstats


@dataclass_json
@dataclass
class CorrelatedColumn:
    column_spec_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnSpecId' }})
    correlation_stats: Optional[correlationstats.CorrelationStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correlationStats' }})
    
