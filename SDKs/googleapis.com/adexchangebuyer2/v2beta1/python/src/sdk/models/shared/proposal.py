from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import buyer
from . import buyer
from . import contactinformation
from . import privatedata
from . import deal
from . import note
from . import seller
from . import contactinformation

class ProposalLastUpdaterOrCommentorRoleEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"

class ProposalOriginatorRoleEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"

class ProposalProposalStateEnum(str, Enum):
    PROPOSAL_STATE_UNSPECIFIED = "PROPOSAL_STATE_UNSPECIFIED"
    PROPOSED = "PROPOSED"
    BUYER_ACCEPTED = "BUYER_ACCEPTED"
    SELLER_ACCEPTED = "SELLER_ACCEPTED"
    CANCELED = "CANCELED"
    FINALIZED = "FINALIZED"


@dataclass_json
@dataclass
class Proposal:
    billed_buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billedBuyer' }})
    buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer' }})
    buyer_contacts: Optional[List[contactinformation.ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerContacts' }})
    buyer_private_data: Optional[privatedata.PrivateData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerPrivateData' }})
    deals: Optional[List[deal.Deal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deals' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    is_renegotiating: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRenegotiating' }})
    is_setup_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSetupComplete' }})
    last_updater_or_commentor_role: Optional[ProposalLastUpdaterOrCommentorRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdaterOrCommentorRole' }})
    notes: Optional[List[note.Note]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    originator_role: Optional[ProposalOriginatorRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originatorRole' }})
    private_auction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateAuctionId' }})
    proposal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalId' }})
    proposal_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalRevision' }})
    proposal_state: Optional[ProposalProposalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalState' }})
    seller: Optional[seller.Seller] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller' }})
    seller_contacts: Optional[List[contactinformation.ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerContacts' }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
