from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetOpsItemRequest:
    ops_item_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemId' }})
    
