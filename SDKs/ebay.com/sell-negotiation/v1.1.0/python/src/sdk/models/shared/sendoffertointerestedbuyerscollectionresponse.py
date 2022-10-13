from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offer


@dataclass_json
@dataclass
class SendOfferToInterestedBuyersCollectionResponse:
    offers: Optional[List[offer.Offer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offers' }})
    
