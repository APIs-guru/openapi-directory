from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subscriptionfilter


@dataclass_json
@dataclass
class DescribeSubscriptionFiltersResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    subscription_filters: Optional[List[subscriptionfilter.SubscriptionFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionFilters' }})
    
