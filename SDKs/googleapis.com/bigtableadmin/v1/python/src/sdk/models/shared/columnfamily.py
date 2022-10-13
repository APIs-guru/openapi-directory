from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gcrule


@dataclass_json
@dataclass
class ColumnFamily:
    gc_rule: Optional[gcrule.GcRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcRule' }})
    
