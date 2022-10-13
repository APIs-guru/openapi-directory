from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buyer
from . import buyer
from . import contactinformation
from . import privatedata
from . import marketplacelabel
from . import seller
from . import contactinformation


@dataclass_json
@dataclass
class Proposal:
    billed_buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billedBuyer' }})
    buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer' }})
    buyer_contacts: Optional[List[contactinformation.ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerContacts' }})
    buyer_private_data: Optional[privatedata.PrivateData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerPrivateData' }})
    dbm_advertiser_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dbmAdvertiserIds' }})
    has_buyer_signed_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasBuyerSignedOff' }})
    has_seller_signed_off: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasSellerSignedOff' }})
    inventory_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySource' }})
    is_renegotiating: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRenegotiating' }})
    is_setup_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSetupComplete' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[List[marketplacelabel.MarketplaceLabel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_updater_or_commentor_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdaterOrCommentorRole' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    negotiation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negotiationId' }})
    originator_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originatorRole' }})
    private_auction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateAuctionId' }})
    proposal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalId' }})
    proposal_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalState' }})
    revision_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionNumber' }})
    revision_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionTimeMs' }})
    seller: Optional[seller.Seller] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller' }})
    seller_contacts: Optional[List[contactinformation.ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerContacts' }})
    
