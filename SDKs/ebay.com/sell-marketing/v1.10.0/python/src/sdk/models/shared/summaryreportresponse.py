from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount
from . import amount


@dataclass_json
@dataclass
class SummaryReportResponse:
    base_sale: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseSale' }})
    last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated' }})
    percentage_sales_lift: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentageSalesLift' }})
    promotion_sale: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionSale' }})
    total_sale: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSale' }})
    
