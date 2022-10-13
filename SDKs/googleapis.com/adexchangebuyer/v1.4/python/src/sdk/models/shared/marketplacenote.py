from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MarketplaceNote:
    creator_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorRole' }})
    deal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    note_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noteId' }})
    proposal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalId' }})
    proposal_revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalRevisionNumber' }})
    timestamp_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampMs' }})
    
