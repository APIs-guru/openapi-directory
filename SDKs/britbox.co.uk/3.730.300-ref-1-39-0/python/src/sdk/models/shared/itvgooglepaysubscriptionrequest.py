from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvGooglePaySubscriptionRequest:
    purchase_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseToken' }})
    subscription_item: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionItem' }})
    
