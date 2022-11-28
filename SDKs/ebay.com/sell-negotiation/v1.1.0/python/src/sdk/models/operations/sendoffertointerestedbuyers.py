from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendOfferToInterestedBuyersHeaders:
    x_ebay_c_marketplace_id: str = field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendOfferToInterestedBuyersSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SendOfferToInterestedBuyersRequest:
    headers: SendOfferToInterestedBuyersHeaders = field()
    security: SendOfferToInterestedBuyersSecurity = field()
    request: Optional[shared.CreateOffersRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendOfferToInterestedBuyersResponse:
    content_type: str = field()
    status_code: int = field()
    send_offer_to_interested_buyers_collection_response: Optional[shared.SendOfferToInterestedBuyersCollectionResponse] = field(default=None)
    
