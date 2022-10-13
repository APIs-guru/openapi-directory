from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import selectedinventorydiscount


@dataclass_json
@dataclass
class ItemPriceMarkdown:
    apply_free_shipping: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyFreeShipping' }})
    auto_select_future_inventory: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoSelectFutureInventory' }})
    block_price_increase_in_item_revision: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockPriceIncreaseInItemRevision' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    promotion_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionImageUrl' }})
    promotion_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionStatus' }})
    selected_inventory_discounts: Optional[List[selectedinventorydiscount.SelectedInventoryDiscount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectedInventoryDiscounts' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
