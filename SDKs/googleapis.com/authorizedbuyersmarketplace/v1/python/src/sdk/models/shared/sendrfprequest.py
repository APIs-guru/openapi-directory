from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contact
from . import money
from . import criteriatargeting
from . import inventorysizetargeting
from . import preferreddealterms
from . import programmaticguaranteedterms


@dataclass_json
@dataclass
class SendRfpRequest:
    buyer_contacts: Optional[List[contact.Contact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerContacts' }})
    client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    estimated_gross_spend: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedGrossSpend' }})
    flight_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flightEndTime' }})
    flight_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flightStartTime' }})
    geo_targeting: Optional[criteriatargeting.CriteriaTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geoTargeting' }})
    inventory_size_targeting: Optional[inventorysizetargeting.InventorySizeTargeting] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventorySizeTargeting' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    preferred_deal_terms: Optional[preferreddealterms.PreferredDealTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredDealTerms' }})
    programmatic_guaranteed_terms: Optional[programmaticguaranteedterms.ProgrammaticGuaranteedTerms] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'programmaticGuaranteedTerms' }})
    publisher_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherProfile' }})
    
