from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usageallocation


@dataclass_json
@dataclass
class MeterUsageRequest:
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DryRun' }})
    product_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductCode' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    usage_allocations: Optional[List[usageallocation.UsageAllocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsageAllocations' }})
    usage_dimension: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsageDimension' }})
    usage_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UsageQuantity' }})
    
