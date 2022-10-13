from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import communication


@dataclass_json
@dataclass
class DescribeCommunicationsResponse:
    communications: Optional[List[communication.Communication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'communications' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
