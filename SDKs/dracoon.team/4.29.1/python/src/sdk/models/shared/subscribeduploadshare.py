from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SubscribedUploadShare:
    r"""SubscribedUploadShare
    Subscribed upload share information
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    target_node_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNodeId') }})
    
