from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount


@dataclass_json
@dataclass
class PromotionReportDetail:
    average_item_discount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageItemDiscount' }})
    average_item_revenue: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageItemRevenue' }})
    average_order_discount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageOrderDiscount' }})
    average_order_revenue: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageOrderRevenue' }})
    average_order_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageOrderSize' }})
    base_sale: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseSale' }})
    items_sold_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsSoldQuantity' }})
    number_of_orders_sold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfOrdersSold' }})
    percentage_sales_lift: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentageSalesLift' }})
    promotion_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionHref' }})
    promotion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionId' }})
    promotion_report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionReportId' }})
    promotion_sale: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionSale' }})
    promotion_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionType' }})
    total_discount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalDiscount' }})
    total_sale: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSale' }})
    
