from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PromotionsReportPagedCollection:
    r"""PromotionsReportPagedCollection
    This type defines the fields in a paginated result set of promotion-level reports. The response consists of 0 or more sequenced pages that are returned from the complete result set, where each page consists of 0 or more items.
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    promotion_reports: Optional[List[PromotionReportDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotionReports') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
