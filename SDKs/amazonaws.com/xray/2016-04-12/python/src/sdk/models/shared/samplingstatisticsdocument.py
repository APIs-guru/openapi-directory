from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SamplingStatisticsDocument:
    borrow_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BorrowCount' }})
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientID' }})
    request_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestCount' }})
    rule_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleName' }})
    sampled_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampledCount' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
