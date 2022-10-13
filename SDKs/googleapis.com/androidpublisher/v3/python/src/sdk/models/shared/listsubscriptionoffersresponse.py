from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subscriptionoffer


@dataclass_json
@dataclass
class ListSubscriptionOffersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    subscription_offers: Optional[List[subscriptionoffer.SubscriptionOffer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionOffers' }})
    
