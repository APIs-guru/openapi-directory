from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteOrderDealsRequest:
    deal_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealIds' }})
    proposal_revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalRevisionNumber' }})
    update_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateAction' }})
    
