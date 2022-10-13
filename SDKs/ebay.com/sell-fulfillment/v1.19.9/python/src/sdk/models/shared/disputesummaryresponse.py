from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import paymentdisputesummary


@dataclass_json
@dataclass
class DisputeSummaryResponse:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    payment_dispute_summaries: Optional[List[paymentdisputesummary.PaymentDisputeSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentDisputeSummaries' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
