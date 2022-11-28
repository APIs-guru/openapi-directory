from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ItemPromotion:
    r"""ItemPromotion
    This type defines the fields that describe a threshold promotion and includes the promotional discount, the items included in the promotion, and the rules that specify when the promotion is applied.
    """
    
    apply_discount_to_single_item_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyDiscountToSingleItemOnly') }})
    budget: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('budget') }})
    coupon_configuration: Optional[CouponConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('couponConfiguration') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discount_rules: Optional[List[DiscountRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountRules') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    inventory_criterion: Optional[InventoryCriterion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryCriterion') }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    promotion_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionImageUrl') }})
    promotion_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionStatus') }})
    promotion_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionType') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    
