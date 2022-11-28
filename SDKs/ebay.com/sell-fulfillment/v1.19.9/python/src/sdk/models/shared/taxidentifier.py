from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TaxIdentifier:
    r"""TaxIdentifier
    This type is used by the taxIdentifier container that is returned in getOrder. The taxIdentifier container consists of taxpayer identification information for buyers from Italy, Spain, or Guatemala. It is currently only returned for orders occurring on the eBay Italy or eBay Spain marketplaces. Note: Currently, the taxIdentifier container is only returned in getOrder and not in getOrders. So, if a seller wanted to view a buyer's tax information for a particular order returned in getOrders, that seller would need to use the orderId value for that particular order, and then run a getOrder call against that order ID.
    """
    
    issuing_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuingCountry') }})
    tax_identifier_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxIdentifierType') }})
    taxpayer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxpayerId') }})
    
