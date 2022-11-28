from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteNodesRequest:
    r"""DeleteNodesRequest
    Request model for deleting nodes
    """
    
    node_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeIds') }})
    
