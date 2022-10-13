from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import image
from . import image
from . import marketingprice
from . import amount
from . import shippingoption
from . import amount


@dataclass_json
@dataclass
class DealItem:
    additional_images: Optional[List[image.Image]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalImages' }})
    category_ancestor_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryAncestorIds' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    commissionable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commissionable' }})
    deal_affiliate_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealAffiliateWebUrl' }})
    deal_end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealEndDate' }})
    deal_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealStartDate' }})
    deal_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dealWebUrl' }})
    energy_efficiency_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyEfficiencyClass' }})
    image: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    item_affiliate_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemAffiliateWebUrl' }})
    item_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemGroupId' }})
    item_group_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemGroupType' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    item_web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemWebUrl' }})
    legacy_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyItemId' }})
    marketing_price: Optional[marketingprice.MarketingPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketingPrice' }})
    price: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    qualified_programs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qualifiedPrograms' }})
    shipping_options: Optional[List[shippingoption.ShippingOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingOptions' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    unit_price: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitPrice' }})
    unit_pricing_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitPricingMeasure' }})
    
