from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import capacitycommitment


@dataclass_json
@dataclass
class ListCapacityCommitmentsResponse:
    capacity_commitments: Optional[List[capacitycommitment.CapacityCommitment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityCommitments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
