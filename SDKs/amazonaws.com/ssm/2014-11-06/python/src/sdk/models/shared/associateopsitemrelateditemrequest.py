from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssociateOpsItemRelatedItemRequest:
    association_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationType') }})
    ops_item_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsItemId') }})
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    resource_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceUri') }})
    
