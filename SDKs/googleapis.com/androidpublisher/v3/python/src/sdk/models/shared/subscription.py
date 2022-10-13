from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import baseplan
from . import subscriptionlisting
from . import subscriptiontaxandcompliancesettings


@dataclass_json
@dataclass
class Subscription:
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    base_plans: Optional[List[baseplan.BasePlan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basePlans' }})
    listings: Optional[List[subscriptionlisting.SubscriptionListing]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listings' }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packageName' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    tax_and_compliance_settings: Optional[subscriptiontaxandcompliancesettings.SubscriptionTaxAndComplianceSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxAndComplianceSettings' }})
    
