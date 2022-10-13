from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import promotionreportdetail


@dataclass_json
@dataclass
class PromotionsReportPagedCollection:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    promotion_reports: Optional[List[promotionreportdetail.PromotionReportDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionReports' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
