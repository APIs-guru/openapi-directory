from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usageallocation


@dataclass_json
@dataclass
class UsageRecord:
    customer_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerIdentifier' }})
    dimension: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimension' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quantity' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    usage_allocations: Optional[List[usageallocation.UsageAllocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsageAllocations' }})
    
