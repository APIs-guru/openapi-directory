from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class ProposalInput:
    r"""ProposalInput
    Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
    """
    
    billed_buyer: Optional[Buyer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedBuyer') }})
    buyer: Optional[Buyer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    buyer_contacts: Optional[List[ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerContacts') }})
    buyer_private_data: Optional[PrivateData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPrivateData') }})
    deals: Optional[List[DealInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deals') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    seller: Optional[SellerInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller') }})
    

@dataclass_json
@dataclass
class Proposal:
    r"""Proposal
    Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.
    """
    
    billed_buyer: Optional[Buyer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedBuyer') }})
    buyer: Optional[Buyer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    buyer_contacts: Optional[List[ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerContacts') }})
    buyer_private_data: Optional[PrivateData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPrivateData') }})
    deals: Optional[List[Deal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deals') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    is_renegotiating: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRenegotiating') }})
    is_setup_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSetupComplete') }})
    last_updater_or_commentor_role: Optional[ProposalLastUpdaterOrCommentorRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdaterOrCommentorRole') }})
    notes: Optional[List[Note]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    originator_role: Optional[ProposalOriginatorRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatorRole') }})
    private_auction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateAuctionId') }})
    proposal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalId') }})
    proposal_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevision') }})
    proposal_state: Optional[ProposalProposalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalState') }})
    seller: Optional[Seller] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller') }})
    seller_contacts: Optional[List[ContactInformation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerContacts') }})
    terms_and_conditions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('termsAndConditions') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
