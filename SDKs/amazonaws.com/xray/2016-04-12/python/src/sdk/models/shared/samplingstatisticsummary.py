from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SamplingStatisticSummary:
    borrow_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BorrowCount' }})
    request_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestCount' }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleName' }})
    sampled_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampledCount' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
