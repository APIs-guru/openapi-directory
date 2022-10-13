from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import billingrecord


@dataclass_json
@dataclass
class ViewBillingResponse:
    billing_records: Optional[List[billingrecord.BillingRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingRecords' }})
    next_page_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageMarker' }})
    
