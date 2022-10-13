from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import creativerequirements
from . import deliverycontrol
from . import money
from . import preferreddealterms
from . import privateauctionterms
from . import programmaticguaranteedterms
from . import timezone
from . import marketplacetargeting

class DealDealTypeEnum(str, Enum):
    DEAL_TYPE_UNSPECIFIED = "DEAL_TYPE_UNSPECIFIED"
    PREFERRED_DEAL = "PREFERRED_DEAL"
    PRIVATE_AUCTION = "PRIVATE_AUCTION"
    PROGRAMMATIC_GUARANTEED = "PROGRAMMATIC_GUARANTEED"


@dataclass_json
@dataclass
class Deal:
    billed_buyer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billedBuyer' }})
    buyer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer' }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creative_requirements: Optional[creativerequirements.CreativeRequirements] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeRequirements' }})
    deal_type: Optional[DealDealTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealType' }})
    delivery_control: Optional[deliverycontrol.DeliveryControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryControl' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    estimated_gross_spend: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedGrossSpend' }})
    flight_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flightEndTime' }})
    flight_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flightStartTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    preferred_deal_terms: Optional[preferreddealterms.PreferredDealTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredDealTerms' }})
    private_auction_terms: Optional[privateauctionterms.PrivateAuctionTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateAuctionTerms' }})
    programmatic_guaranteed_terms: Optional[programmaticguaranteedterms.ProgrammaticGuaranteedTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'programmaticGuaranteedTerms' }})
    proposal_revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'proposalRevision' }})
    publisher_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherProfile' }})
    seller_time_zone: Optional[timezone.TimeZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerTimeZone' }})
    targeting: Optional[marketplacetargeting.MarketplaceTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targeting' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
