from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import marketplacedeal
from . import proposal


@dataclass_json
@dataclass
class EditAllOrderDealsRequest:
    deals: Optional[List[marketplacedeal.MarketplaceDeal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deals' }})
    proposal: Optional[proposal.Proposal] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposal' }})
    proposal_revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalRevisionNumber' }})
    update_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateAction' }})
    
