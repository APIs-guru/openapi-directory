from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SendRfpRequest:
    r"""SendRfpRequest
    Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.
    """
    
    buyer_contacts: Optional[List[Contact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerContacts') }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    estimated_gross_spend: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedGrossSpend') }})
    flight_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightEndTime') }})
    flight_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightStartTime') }})
    geo_targeting: Optional[CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geoTargeting') }})
    inventory_size_targeting: Optional[InventorySizeTargeting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventorySizeTargeting') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    preferred_deal_terms: Optional[PreferredDealTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredDealTerms') }})
    programmatic_guaranteed_terms: Optional[ProgrammaticGuaranteedTerms] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticGuaranteedTerms') }})
    publisher_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfile') }})
    
