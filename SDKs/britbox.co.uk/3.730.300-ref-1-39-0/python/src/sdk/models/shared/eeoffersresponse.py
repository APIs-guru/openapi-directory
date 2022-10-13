from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import eeofferitem


@dataclass_json
@dataclass
class EeOffersResponse:
    eligible_offers: List[eeofferitem.EeOfferItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eligibleOffers' }})
    
