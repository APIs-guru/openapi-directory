from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Proposal
    Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer.
    """
    
    billed_buyer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedBuyer') }})
    buyer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    buyer_contacts: Optional[List[Contact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerContacts') }})
    buyer_private_data: Optional[PrivateData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPrivateData') }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    deal_type: Optional[ProposalDealTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealType') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    is_renegotiating: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRenegotiating') }})
    last_updater_or_commentor_role: Optional[ProposalLastUpdaterOrCommentorRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdaterOrCommentorRole') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[List[Note]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    originator_role: Optional[ProposalOriginatorRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorRole') }})
    pausing_consented: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pausingConsented') }})
    proposal_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevision') }})
    publisher_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfile') }})
    seller_contacts: Optional[List[Contact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerContacts') }})
    state: Optional[ProposalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
