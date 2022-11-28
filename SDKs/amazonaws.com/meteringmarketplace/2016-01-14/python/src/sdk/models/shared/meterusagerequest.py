from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MeterUsageRequest:
    product_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductCode') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    usage_dimension: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageDimension') }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    usage_allocations: Optional[List[UsageAllocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageAllocations') }})
    usage_quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UsageQuantity') }})
    
