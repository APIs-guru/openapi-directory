from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateSubscriptionsBulkRequest:
    is_subscribed: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSubscribed' }})
    object_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectIds' }})
    
