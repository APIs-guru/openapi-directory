from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventItem:
    r"""EventItem
    The detailed data returned for the event item.
    """
    
    additional_images: Optional[List[Image]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalImages') }})
    category_ancestor_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryAncestorIds') }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    energy_efficiency_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('energyEfficiencyClass') }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    image: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    item_affiliate_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemAffiliateWebUrl') }})
    item_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemGroupId') }})
    item_group_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemGroupType') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    item_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemWebUrl') }})
    legacy_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyItemId') }})
    marketing_price: Optional[MarketingPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingPrice') }})
    price: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    qualified_programs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qualifiedPrograms') }})
    shipping_options: Optional[List[ShippingOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingOptions') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    unit_price: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPrice') }})
    unit_pricing_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPricingMeasure') }})
    
