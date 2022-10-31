from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SendOfferToInterestedBuyersHeaders:
    x_ebay_c_marketplace_id: str = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendOfferToInterestedBuyersSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SendOfferToInterestedBuyersRequest:
    headers: SendOfferToInterestedBuyersHeaders = field(default=None)
    request: Optional[shared.CreateOffersRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SendOfferToInterestedBuyersSecurity = field(default=None)
    

@dataclass
class SendOfferToInterestedBuyersResponse:
    content_type: str = field(default=None)
    send_offer_to_interested_buyers_collection_response: Optional[shared.SendOfferToInterestedBuyersCollectionResponse] = field(default=None)
    status_code: int = field(default=None)
    
