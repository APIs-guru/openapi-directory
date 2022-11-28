from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DealDealTypeEnum(str, Enum):
    DEAL_TYPE_UNSPECIFIED = "DEAL_TYPE_UNSPECIFIED"
    PREFERRED_DEAL = "PREFERRED_DEAL"
    PRIVATE_AUCTION = "PRIVATE_AUCTION"
    PROGRAMMATIC_GUARANTEED = "PROGRAMMATIC_GUARANTEED"


@dataclass_json
@dataclass
class Deal:
    r"""Deal
    A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
    """
    
    billed_buyer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedBuyer') }})
    buyer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creative_requirements: Optional[CreativeRequirements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeRequirements') }})
    deal_type: Optional[DealDealTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealType') }})
    delivery_control: Optional[DeliveryControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryControl') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    estimated_gross_spend: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedGrossSpend') }})
    flight_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightEndTime') }})
    flight_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightStartTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preferred_deal_terms: Optional[PreferredDealTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredDealTerms') }})
    private_auction_terms: Optional[PrivateAuctionTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateAuctionTerms') }})
    programmatic_guaranteed_terms: Optional[ProgrammaticGuaranteedTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticGuaranteedTerms') }})
    proposal_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalRevision') }})
    publisher_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfile') }})
    seller_time_zone: Optional[TimeZone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerTimeZone') }})
    targeting: Optional[MarketplaceTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class DealInput:
    r"""DealInput
    A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.
    """
    
    estimated_gross_spend: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedGrossSpend') }})
    flight_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightEndTime') }})
    flight_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightStartTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preferred_deal_terms: Optional[PreferredDealTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredDealTerms') }})
    private_auction_terms: Optional[PrivateAuctionTermsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateAuctionTerms') }})
    programmatic_guaranteed_terms: Optional[ProgrammaticGuaranteedTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticGuaranteedTerms') }})
    publisher_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfile') }})
    seller_time_zone: Optional[TimeZone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerTimeZone') }})
    targeting: Optional[MarketplaceTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targeting') }})
    
