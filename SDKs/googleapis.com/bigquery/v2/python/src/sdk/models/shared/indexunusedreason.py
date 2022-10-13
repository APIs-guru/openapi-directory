from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablereference


@dataclass_json
@dataclass
class IndexUnusedReason:
    base_table: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_table' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index_name' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
