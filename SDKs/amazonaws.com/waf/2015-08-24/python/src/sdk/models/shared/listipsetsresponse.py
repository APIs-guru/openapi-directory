from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ipsetsummary


@dataclass_json
@dataclass
class ListIPSetsResponse:
    ip_sets: Optional[List[ipsetsummary.IPSetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IPSets' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
