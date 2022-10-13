from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contact
from . import privatedata
from . import note
from . import contact

class ProposalDealTypeEnum(str, Enum):
    DEAL_TYPE_UNSPECIFIED = "DEAL_TYPE_UNSPECIFIED"
    PREFERRED_DEAL = "PREFERRED_DEAL"
    PRIVATE_AUCTION = "PRIVATE_AUCTION"
    PROGRAMMATIC_GUARANTEED = "PROGRAMMATIC_GUARANTEED"

class ProposalLastUpdaterOrCommentorRoleEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"

class ProposalOriginatorRoleEnum(str, Enum):
    BUYER_SELLER_ROLE_UNSPECIFIED = "BUYER_SELLER_ROLE_UNSPECIFIED"
    BUYER = "BUYER"
    SELLER = "SELLER"

class ProposalStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    BUYER_REVIEW_REQUESTED = "BUYER_REVIEW_REQUESTED"
    SELLER_REVIEW_REQUESTED = "SELLER_REVIEW_REQUESTED"
    BUYER_ACCEPTANCE_REQUESTED = "BUYER_ACCEPTANCE_REQUESTED"
    FINALIZED = "FINALIZED"
    TERMINATED = "TERMINATED"


@dataclass_json
@dataclass
class Proposal:
    billed_buyer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billedBuyer' }})
    buyer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer' }})
    buyer_contacts: Optional[List[contact.Contact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerContacts' }})
    buyer_private_data: Optional[privatedata.PrivateData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerPrivateData' }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    deal_type: Optional[ProposalDealTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealType' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    is_renegotiating: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isRenegotiating' }})
    last_updater_or_commentor_role: Optional[ProposalLastUpdaterOrCommentorRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdaterOrCommentorRole' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[List[note.Note]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    originator_role: Optional[ProposalOriginatorRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originatorRole' }})
    pausing_consented: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pausingConsented' }})
    proposal_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalRevision' }})
    publisher_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherProfile' }})
    seller_contacts: Optional[List[contact.Contact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerContacts' }})
    state: Optional[ProposalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'termsAndConditions' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
