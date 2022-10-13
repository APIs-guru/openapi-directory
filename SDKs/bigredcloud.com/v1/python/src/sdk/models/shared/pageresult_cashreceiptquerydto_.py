from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cashreceiptquerydto


@dataclass_json
@dataclass
class PageResultCashReceiptQueryDto:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    items: Optional[List[cashreceiptquerydto.CashReceiptQueryDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    next_page_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageLink' }})
    
