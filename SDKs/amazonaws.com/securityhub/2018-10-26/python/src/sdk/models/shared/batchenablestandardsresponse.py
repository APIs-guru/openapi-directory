from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import standardssubscription


@dataclass_json
@dataclass
class BatchEnableStandardsResponse:
    standards_subscriptions: Optional[List[standardssubscription.StandardsSubscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StandardsSubscriptions' }})
    
