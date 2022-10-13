from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import shareerror


@dataclass_json
@dataclass
class ShareDetails:
    share_errors: Optional[List[shareerror.ShareError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareErrors' }})
    successful_shares: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessfulShares' }})
    
