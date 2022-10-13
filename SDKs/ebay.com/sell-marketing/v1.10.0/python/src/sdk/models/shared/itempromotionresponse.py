from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import amount
from . import couponconfiguration
from . import discountrule
from . import inventorycriterion


@dataclass_json
@dataclass
class ItemPromotionResponse:
    apply_discount_to_single_item_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyDiscountToSingleItemOnly' }})
    budget: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'budget' }})
    coupon_configuration: Optional[couponconfiguration.CouponConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'couponConfiguration' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    discount_rules: Optional[List[discountrule.DiscountRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discountRules' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    inventory_criterion: Optional[inventorycriterion.InventoryCriterion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryCriterion' }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionId' }})
    promotion_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionImageUrl' }})
    promotion_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionStatus' }})
    promotion_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionType' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
