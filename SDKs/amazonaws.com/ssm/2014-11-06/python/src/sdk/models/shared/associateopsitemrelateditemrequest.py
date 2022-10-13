from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociateOpsItemRelatedItemRequest:
    association_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationType' }})
    ops_item_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsItemId' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    resource_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceUri' }})
    
