from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import marketplacenote


@dataclass_json
@dataclass
class UpdatePrivateAuctionProposalRequest:
    external_deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalDealId' }})
    note: Optional[marketplacenote.MarketplaceNote] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    proposal_revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalRevisionNumber' }})
    update_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateAction' }})
    
