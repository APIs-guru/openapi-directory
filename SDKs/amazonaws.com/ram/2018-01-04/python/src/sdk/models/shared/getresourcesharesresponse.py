from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourceshare


@dataclass_json
@dataclass
class GetResourceSharesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    resource_shares: Optional[List[resourceshare.ResourceShare]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShares' }})
    
