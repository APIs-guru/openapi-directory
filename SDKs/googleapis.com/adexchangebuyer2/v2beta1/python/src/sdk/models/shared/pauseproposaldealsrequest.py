from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PauseProposalDealsRequest:
    external_deal_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalDealIds' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
