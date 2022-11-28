from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SummaryReportResponse:
    r"""SummaryReportResponse
    This type defines the fields in an Promotions Manager Summary report. Reports are formatted in JSON. For more details, see Reading item promotion Summary reports.
    """
    
    base_sale: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseSale') }})
    last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated') }})
    percentage_sales_lift: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentageSalesLift') }})
    promotion_sale: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionSale') }})
    total_sale: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSale') }})
    
