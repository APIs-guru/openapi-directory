from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MoveAccountRequest:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    destination_parent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationParentId' }})
    source_parent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceParentId' }})
    
