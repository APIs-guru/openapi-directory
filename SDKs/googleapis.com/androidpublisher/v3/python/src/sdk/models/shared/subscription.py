from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionInput:
    r"""SubscriptionInput
    A single subscription for an app.
    """
    
    base_plans: Optional[List[BasePlanInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlans') }})
    listings: Optional[List[SubscriptionListing]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    tax_and_compliance_settings: Optional[SubscriptionTaxAndComplianceSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAndComplianceSettings') }})
    

@dataclass_json
@dataclass
class Subscription:
    r"""Subscription
    A single subscription for an app.
    """
    
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    base_plans: Optional[List[BasePlan]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basePlans') }})
    listings: Optional[List[SubscriptionListing]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listings') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    tax_and_compliance_settings: Optional[SubscriptionTaxAndComplianceSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxAndComplianceSettings') }})
    
