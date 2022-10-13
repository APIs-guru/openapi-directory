from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Refund:
    refund_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundId' }})
    refund_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundStatus' }})
    
