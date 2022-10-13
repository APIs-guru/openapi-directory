from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import opsitem


@dataclass_json
@dataclass
class GetOpsItemResponse:
    ops_item: Optional[opsitem.OpsItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItem' }})
    
