from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PromotionReportDetail:
    r"""PromotionReportDetail
    This type defines the fields in a promotion-level report.
    """
    
    average_item_discount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageItemDiscount') }})
    average_item_revenue: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageItemRevenue') }})
    average_order_discount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageOrderDiscount') }})
    average_order_revenue: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageOrderRevenue') }})
    average_order_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageOrderSize') }})
    base_sale: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseSale') }})
    items_sold_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsSoldQuantity') }})
    number_of_orders_sold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberOfOrdersSold') }})
    percentage_sales_lift: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentageSalesLift') }})
    promotion_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionHref') }})
    promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionId') }})
    promotion_report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionReportId') }})
    promotion_sale: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionSale') }})
    promotion_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionType') }})
    total_discount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDiscount') }})
    total_sale: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSale') }})
    
