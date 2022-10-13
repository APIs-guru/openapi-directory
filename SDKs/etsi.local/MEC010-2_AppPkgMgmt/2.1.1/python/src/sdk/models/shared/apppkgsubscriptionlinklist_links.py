from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import linktype
from . import subscriptions_apppkgsubscription


@dataclass_json
@dataclass
class AppPkgSubscriptionLinkListLinks:
    self: linktype.LinkType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    subscriptions: Optional[List[subscriptions_apppkgsubscription.SubscriptionsAppPkgSubscription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptions' }})
    
