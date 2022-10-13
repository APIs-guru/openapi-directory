from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datastats


@dataclass_json
@dataclass
class StructStats:
    field_stats: Optional[dict[str, datastats.DataStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldStats' }})
    
