from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buyer
from . import buyer
from . import contactinformation
from . import deliverycontrol
from . import marketplacelabel
from . import publisherprovidedforecast
from . import seller
from . import sharedtargeting
from . import dealterms


@dataclass_json
@dataclass
class Product:
    billed_buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billedBuyer' }})
    buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer' }})
    creation_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTimeMs' }})
    creator_contacts: Optional[List[contactinformation.ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorContacts' }})
    creator_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorRole' }})
    delivery_control: Optional[deliverycontrol.DeliveryControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryControl' }})
    flight_end_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flightEndTimeMs' }})
    flight_start_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flightStartTimeMs' }})
    has_creator_signed_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasCreatorSignedOff' }})
    inventory_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySource' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[List[marketplacelabel.MarketplaceLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_update_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTimeMs' }})
    legacy_offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyOfferId' }})
    marketplace_publisher_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplacePublisherProfileId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    private_auction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateAuctionId' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    publisher_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherProfileId' }})
    publisher_provided_forecast: Optional[publisherprovidedforecast.PublisherProvidedForecast] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherProvidedForecast' }})
    revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionNumber' }})
    seller: Optional[seller.Seller] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller' }})
    shared_targetings: Optional[List[sharedtargeting.SharedTargeting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharedTargetings' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    syndication_product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syndicationProduct' }})
    terms: Optional[dealterms.DealTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    web_property_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyCode' }})
    
