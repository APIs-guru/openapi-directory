from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RelatedOpsItem:
    r"""RelatedOpsItem
    An OpsItems that shares something in common with the current OpsItem. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.
    """
    
    ops_item_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpsItemId') }})
    
